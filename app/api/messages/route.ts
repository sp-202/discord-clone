import { currentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db"
import { Message } from "@/lib/generated/prisma"
import { NextResponse } from "next/server"

const MESSAGES_BATCH = 20

export async function GET(
    req: Request
) {
    try {
        const profile = await currentProfile()
        const { searchParams } = new URL(req.url)

        const cursor = searchParams.get("cursor")
        const channelId = searchParams.get("channelId")

        // console.log("cursor is ",cursor)
        // console.log("channel id is ",channelId)
        // console.log("url is ", req.url)

        if (!profile) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        if (!channelId) {
            return new NextResponse("Channel ID missing", { status: 400 })
        }

        let messages: Message[] = [];

        if(cursor){
            messages = await db.message.findMany({
                take: MESSAGES_BATCH,
                skip: 1,
                cursor: {
                    id: cursor,
                },
                where: {
                    channelId,
                },
                include:{
                    member: {
                        include: {
                            profile: true
                        }
                    }
                },
                orderBy: {
                    createdAt: "desc"
                }
            })
        } else {
            messages = await db.message.findMany({
                take: MESSAGES_BATCH,
                where: {
                    channelId,
                },
                include:{
                    member: {
                        include: {
                            profile: true
                        }
                    }
                },
                orderBy: {
                    createdAt: "desc"
                }
            })
        }

        let nextCursor = null;

        if(messages.length === MESSAGES_BATCH){
            nextCursor = messages[MESSAGES_BATCH -1].id
        }
        // console.log("ALL_MESSAGES", messages)
        return NextResponse.json({
            items: messages,
            nextCursor
        })

    } catch (err) {
        console.log("[MESSAGES_ERROR]", err)
        return new NextResponse("Internal Error", { status: 500 })
    }
}