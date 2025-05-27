import { useSocket } from "@/components/providers/socket-provider"
import { Member, Message, Profile } from "@/lib/generated/prisma"
import { useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react"

type ChatSocketProps = {
    addKey: string
    updateKey: string
    queryKey: string
}

type MessageWithMemberWithProfile = Message & {
    member: Member & {
        profile: Profile
    }
}

export const useChatSocket = ({
    addKey,
    updateKey,
    queryKey
}: ChatSocketProps) => {
    const { socket } = useSocket();
    const queryClent = useQueryClient()

    useEffect(() => {
        if (!socket) {
            return;
        }

        socket.on(updateKey, (message: MessageWithMemberWithProfile) => {
            queryClent.setQueryData([queryKey], (olddata: any) => {
                if (!olddata || !olddata.pages || olddata.pages.length === 0) {
                    return olddata
                }

                const newData = olddata.pages.map((page: any) => {
                    return {
                        ...page,
                        items: page.items.map((item: MessageWithMemberWithProfile) => {
                            if (item.id === message.id) {
                                return message;
                            }

                            return item
                        })
                    }
                });

                return {
                    ...olddata,
                    pages: newData
                }

            })
        })


        socket.on(addKey, (message: MessageWithMemberWithProfile) => {
            queryClent.setQueryData([queryKey], (oldData: any) => {
                if (!oldData || !oldData.pages || oldData.pages.length === 0) {
                    return {
                        pages: [{
                            items: [message],
                        }]
                    }
                }

                const newData = [...oldData.pages]

                newData[0] = {
                    ...newData[0],
                    items: [
                        message,
                        ...newData[0].items
                    ]
                }

                return {
                    ...oldData,
                    pages: newData
                }
            })
        })

        return () => {
            socket.off(addKey)
            socket.off(updateKey)
        }

    }, [queryClent, addKey, queryKey, socket, updateKey])
}