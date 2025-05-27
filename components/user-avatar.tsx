import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "./ui/avatar";

interface UseAvatarProps {
    src?: string;
    classname?: string;
};

export const UserAvtar = ({
    src,
    classname,
}: UseAvatarProps) =>{

    return (
        <Avatar className={cn(
            "h-7 w-7 md:h-10 md:w-10",
            classname
        )}>
            <AvatarImage src={src}/>
        </Avatar>
    )

}