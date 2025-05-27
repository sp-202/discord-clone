import { currentProfile } from "@/lib/current-profile"
import { db } from "@/lib/db";
import { MemberRole } from "@/lib/generated/prisma";
import { NextResponse } from "next/server"

export async function DELETE(
    req: Request,
    { params }: { params: { channelId: string } }
) {
    try {
        const profile = await currentProfile();
        const { searchParams } = new URL(req.url)

        const serverId = searchParams.get("serverId")

        const { channelId } = await params

        if (!profile) {
            return new NextResponse("Unauthorixed", { status: 401 });
        }

        if (!serverId) {
            return new NextResponse("Server ID missing", { status: 400 });
        }

        if(!channelId){
            return new NextResponse("Channel ID missing", { status: 400 });
        }

        const server = await db.server.update({
            where:{
                id: serverId,
                members: {
                    some: {
                        profileId: profile.id,
                        role: {
                            in: [MemberRole.ADMIN, MemberRole.MODERATOR],
                        }
                    }
                }
            },
            data: {
                channels:{
                    delete:{
                        id: channelId,
                        name: {
                            not: "general",
                        }
                    }
                }
            }
        })

        return NextResponse.json(server)

    } catch (err) {
        console.log("[CHANNEL_DELETE]", err)
        return new NextResponse("INTERNAL ERROR", { status: 500 })
    }
}


export async function PATCH(
    req: Request,
    { params }: { params: { channelId: string } }
) {
    try {
        const profile = await currentProfile();
        const {name, type } = await req.json();
        const { searchParams } = new URL(req.url)

        const serverId = searchParams.get("serverId")

        const { channelId } = await params

        if (!profile) {
            return new NextResponse("Unauthorixed", { status: 401 });
        }

        if (!serverId) {
            return new NextResponse("Server ID missing", { status: 400 });
        }

        if(!channelId){
            return new NextResponse("Channel ID missing", { status: 400 });
        }

        if(name==="general"){
            return new NextResponse("Name cannot be 'general'", { status: 400 });
        }

        const server = await db.server.update({
            where:{
                id: serverId,
                members: {
                    some: {
                        profileId: profile.id,
                        role: {
                            in: [MemberRole.ADMIN, MemberRole.MODERATOR],
                        }
                    }
                }
            },
            data: {
                channels: {
                    update: {
                        where: {
                            id: channelId,
                            NOT: {
                                name: "general"
                            }
                        },
                        data:{
                            name,
                            type
                        }
                    }
                }
            }
        })

        return NextResponse.json(server)

    } catch (err) {
        console.log("[CHANNEL_DELETE]", err)
        return new NextResponse("INTERNAL ERROR", { status: 500 })
    }
}