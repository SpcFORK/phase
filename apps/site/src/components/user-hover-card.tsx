import Link from "next/link"

import { CalendarIcon } from "@radix-ui/react-icons"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { getInitials } from "@/lib/utils"


export interface UserHoverCardProps {
  username: string,
  avatar: string,
  bio: string,
  joined: string,
  url: string,
}


export const UserHoverCard = (props: UserHoverCardProps) => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <Link href={props.url} className="font-semibold hover:underline">{props.username}</Link>
    </HoverCardTrigger>
    <HoverCardContent>
      <div className="flex justify-between space-x-4">
        <Avatar>
          <AvatarImage src={props.avatar} />
          <AvatarFallback>{getInitials(props.username)}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">{props.username}</h4>
          <p className="text-sm">
            {props.bio}
          </p>
          <div className="flex items-center pt-2">
            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
            <span className="text-xs text-muted-foreground">
              Joined {props.joined}
            </span>
          </div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
)