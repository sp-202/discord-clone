import { currentProfilePages } from "@/lib/current-profile-pages";
import { db } from "@/lib/db";
import { MemberRole } from "@/lib/generated/prisma";
import { NextApiResponseServerIo } from "@/types";
import { NextApiRequest } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponseServerIo
) {
    if (req.method !== "DELETE" && req.method !== "PATCH") {
        return res.status(405).json({ error: "Method not allowed" })
    }

    try {
        const profile = await currentProfilePages(req)
        const { directMessageId, conversationId } = req.query;
        const { content } = req.body

        if (!profile) {
            return res.status(401).json({ error: "Unauthorized" })
        }

        if (!conversationId) {
            return res.status(400).json({ error: "Conversation id missing" })
        }

        const conversation = await db.conversations.findFirst({
            where: {
                id: conversationId as string,
                OR: [
                    {
                        memberOne: {
                            profileId: profile.id
                        }
                    },
                    {
                        memberTwo: {
                            profileId: profile.id
                        }
                    }
                ]
            },
            include: {
                memberOne: {
                    include: {
                        profile: true
                    }
                },
                memberTwo: {
                    include: {
                        profile: true
                    }
                }
            }
        })

        if (!conversation) {
            return res.status(404).json({ error: "Conversation missing" })
        }

        const member = conversation.memberOne.profileId === profile.id ? conversation.memberOne : conversation.memberTwo

        if (!member) {
            return res.status(404).json({ error: "Member not found" })
        }

        let directmessage = await db.directMessage.findFirst({
            where: {
                id: directMessageId as string,
                conversationId: conversationId as string,
            },
            include: {
                member: {
                    include: {
                        profile: true
                    }
                }
            }
        })

        if (!directmessage || directmessage.deleted) {
            return res.status(404).json({ error: "Message not found" })
        }

        const isMessageOwner = directmessage.memberId === member.id
        const isAdmin = member.role === MemberRole.ADMIN
        const isModerator = member.role === MemberRole.MODERATOR

        const canModify = isMessageOwner || isAdmin || isModerator

        if (!canModify) {
            return res.status(401).json({ error: "Unauthorized" })
        }

        if (req.method === "DELETE") {
            if (!isMessageOwner) {
                return res.status(401).json({ error: "Unauthorized" })
            }

            directmessage = await db.directMessage.update({
                where: {
                    id: directMessageId as string,
                },
                data: {
                    fileUrl: null,
                    content: "This message has been deleted",
                    deleted: true
                },
                include: {
                    member: {
                        include: {
                            profile: true
                        }
                    }
                }
            })
        }

        if (req.method === "PATCH") {
            if (!isMessageOwner) {
                return res.status(401).json({ error: "Unauthorized" })
            }

            directmessage = await db.directMessage.update({
                where: {
                    id: directMessageId as string,
                },
                data: {
                    content
                },
                include: {
                    member: {
                        include: {
                            profile: true
                        }
                    }
                }
            })
        }

        const updateKey = `chat:${conversation.id}:messages:update`

        res?.socket?.server?.io?.emit(updateKey, directmessage)

        return res.status(200).json(directmessage)

    } catch (err) {

        console.log("[DIRECT_MESSAGE_ID]", err)
        return res.status(500).json({ error: "Internal Error" })
    }
}