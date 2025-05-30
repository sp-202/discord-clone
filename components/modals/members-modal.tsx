"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from "../ui/dropdown-menu";

import {
  Check,
  Gavel,
  Loader2,
  MoreVertical,
  Shield, ShieldAlert,
  ShieldCheck,
  ShieldQuestion
} from "lucide-react";

import { useModal } from "@/hooks/use-modal-store"
import { ServerWithMemberWithProfiles } from "@/types";
import { ScrollArea } from "../ui/scroll-area";
import { UserAvtar } from "../user-avatar";
import { useState } from "react";
import { MemberRole } from "@/lib/generated/prisma";
import qs from "query-string"
import axios from "axios";
import { useRouter } from "next/navigation";




const roleIconMAp = {
  "GUEST": null,
  "MODERATOR": <ShieldCheck className="h-4 w-4 ml-2 text-indigo-500" />,
  "ADMIN": <ShieldAlert className="h-4 w-4 ml-2 text-rose-500" />,
}


export const MembersModal = () => {
  const router = useRouter();
  const { onOpen, isOpen, onClose, type, data } = useModal();
  const [lodingId, setLodingId] = useState("")

  const isModalOpen = isOpen && type === "members";

  const { server } = data as { server: ServerWithMemberWithProfiles };
  console.log(server?.members)


  const onRoleChange = async (memberId: string, role: MemberRole) => {
    try {
      setLodingId(memberId)
      const url = qs.stringifyUrl({
        url: `/api/members/${memberId}`,
        query: {
          serverId: server?.id,
        }
      })

      const response = await axios.patch(url, { role })

      router.refresh();
      onOpen("members", { server: response.data })

    } catch (err) {
      console.log(err)
    } finally {
      setLodingId("")
    }
  }

  const onKick = async (memberId: string) => {
    try {
      setLodingId(memberId)

      const url = qs.stringifyUrl({
        url: `/api/members/${memberId}`,
        query: {
          serverId: server?.id,
        }
      })
      
      const response = await axios.delete(url)

      router.refresh();
      onOpen("members", { server: response.data })

    } catch (err) {
      console.log(err)
    } finally {
      setLodingId("")
    }
  }


  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Manage Members
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            {server?.members?.length} Members
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="mt-8 max-h-[420px] pr-6">
          {server?.members?.map((member) => (
            <div key={member.id} className="flex items-center gap-x-2 mb-6">
              <UserAvtar src={member.profile.imageUrl} />
              <div className="flex flex-col gap-y-1">
                <div className="text-xs font-semibold flex items-center gap-x-1">
                  {member.profile.name}
                  {roleIconMAp[member.role]}
                </div>
                <p className="text-xs text-zinc-500">
                  {member.profile.email}
                </p>
              </div>

              {server.profileId !== member.profileId && lodingId !== member.id && (
                <div className="ml-auto">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreVertical className="h-4 w-4 text-zinc-500" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="left">
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger
                          className="flex items-center"
                        >
                          <ShieldQuestion className="h-4 w-4 mr-2" />
                          <span>Role</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            <DropdownMenuItem
                              onClick={() => onRoleChange(member.id, "GUEST")}
                            >
                              <Shield className="h-4 w-4 ml-2 mr-2" />
                              Guset
                              {member.role === "GUEST" && (
                                <Check className="h-4 w-4 ml-2 mr-2" />
                              )}
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => onRoleChange(member.id, "MODERATOR")}
                            >
                              <Shield className="h-4 w-4 ml-2 mr-2" />
                              Moderator
                              {member.role === "MODERATOR" && (
                                <Check className="h-4 w-4 ml-2 mr-2" />
                              )}
                            </DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={()=> onKick(member.id)}
                      >
                        <Gavel className="h-4 w-4 ml-2 mr-2" />
                        Kick
                      </DropdownMenuItem>
                    </DropdownMenuContent>

                  </DropdownMenu>
                </div>
              )}
              {lodingId === member.id && (
                <Loader2 className="animate-spin text-zinc-500 ml-auto w-4 h-4" />
              )}
            </div>
          ))}
        </ScrollArea>

      </DialogContent>
    </Dialog >
  )
}