import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: { params: { serverId: string } }
) {
    try {
        const profile = await currentProfile()
        const { serverId } = await params
        const {name, imageUrl} = await req.json()

        if (!profile) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const server = await db.server.update({
            where: {
                id: serverId,
                profileId: profile.id
            },
            data: {
                name,
                imageUrl
            }
        });

        return NextResponse.json(server);

    } catch (err) {
        console.log("[SERVER_ID_PATCH]", err);
        return new NextResponse("Internal Error", { status: 500 })
    }
}


export async function DELETE(
    req: Request,
    { params }: { params: { serverId: string } }
) {
    try {
        const profile = await currentProfile()
        const { serverId } = await params

        if (!profile) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const server = await db.server.delete({
            where: {
                id: serverId,
                profileId: profile.id
            },
        });

        return NextResponse.json(server);

    } catch (err) {
        console.log("[SERVER_ID_DELETE]", err);
        return new NextResponse("Internal Error", { status: 500 })
    }
}