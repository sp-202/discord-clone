import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

interface InviteCodePageProps {
    params: {
        inviteCode: string;
    }
}

const InviteCodePage = async ({
    params
}: InviteCodePageProps)=>{

    const profile = await currentProfile();
    const { inviteCode } = await params

    if(!profile){
        return redirect("/sign-in");
    }

    if(!inviteCode){
        return redirect("/")
    }

    const existingServer = await db.server.findFirst({
        where:{
            inviteCode: inviteCode,
            members:{
                some:{
                    profileId: profile.id
                }
            }
        }
    })

    // console.log(existingServer)

    if(existingServer){
        return redirect(`/servers/${existingServer.id}`)
    }

    const server = await db.server.update({
        where:{
            inviteCode: inviteCode,
        },
        data:{
            members:{
                create:[
                    {
                        profileId: profile.id,
                        
                    }
                ]
            }
        }
    })

    // console.log(server)

    if(server){
        return redirect(`/servers/${server.id}`)
    }

    return null
}

export default InviteCodePage