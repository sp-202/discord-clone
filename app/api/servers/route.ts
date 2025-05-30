import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { MemberRole } from "@/lib/generated/prisma";
import { NextResponse } from "next/server";

import { v4 as uuid4 } from "uuid";

export async function POST(req: Request) {
    try {
        const { name, imageUrl } = await req.json();
        const profile = await currentProfile();

        if (!profile) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const server = await db.server.create({
            data: {
                profileId: profile.id,
                name,
                imageUrl,
                inviteCode: uuid4(),
                channels: {
                    create: [
                        { name: "general", profileId: profile.id }
                    ]
                },
                members:{
                    create:[
                        {profileId: profile.id, role: MemberRole.ADMIN}
                    ]
                }
            }
        });

        return NextResponse.json(server)

    } catch (err) {
        console.log("[Servers_post]", err)
        return new NextResponse("Internal Error", { status: 500 })
    }
}