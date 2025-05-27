import { useSocket } from "@/components/providers/socket-provider";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import qs from "query-string"

interface ChatQueryProps {
    queryKey: string
    apiUrl: string
    paramKey: "channelId" | "conversationId"
    paramValue: string
}

export const useChatQuery = ({
    queryKey,
    apiUrl,
    paramKey,
    paramValue
}: ChatQueryProps) => {
    const { isConnected } = useSocket();

    const fetchMessages = async ({ pageParam = undefined }) => {
        const url = qs.stringifyUrl({
            url: apiUrl,
            query: {
                cursor: pageParam,
                [paramKey]: paramValue
            }
        }, { skipNull: true });

        console.log("Fetching from:", url);

        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        const data = await res.json();
        console.log("Fetched messages:", data);
        return data;
    };

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: [queryKey],
        queryFn: fetchMessages,
        getNextPageParam: (lastPage) => lastPage?.nextCursor,
        initialPageParam: undefined,
        refetchInterval: isConnected ? false : 1000,
        enabled: Boolean(paramValue)
    });

    return {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    };
};
