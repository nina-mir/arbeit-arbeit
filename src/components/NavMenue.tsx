import { Button } from "@/components/ui/button"
import { TwitterLogoIcon, DropdownMenuIcon} from "@radix-ui/react-icons"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavMenue() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <Button variant="outline">Open</Button> */}
        <DropdownMenuIcon 
                        width="2rem"
                        height="2rem"
                        className="
                        md:hidden
                        sm:block
                        stroke-gray-200
                        stroke-[0.5]              
                        "
                        /> 
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-screen 
      h-screen 
      bg-red-100
      flex
      flex-col
      items-center
      gap-4
      duration-850 
      ease-linear
      transition-all
      "
        align="start"
      >
        <DropdownMenuGroup className="
        flex flex-col justify-between items-center 
        h-[70%]  
        font-[Questrial]
        mt-2
        ">
          <DropdownMenuItem className="text-[1.4rem]">
            Home
          </DropdownMenuItem>
          <DropdownMenuItem className="text-[1.4rem]">
            Booking a Session (FAQ)
          </DropdownMenuItem>
          <DropdownMenuItem className="text-[1.4rem]">
            Contact
          </DropdownMenuItem>
          <DropdownMenuItem className="text-[1.4rem]">
            Tour Dates & Locations
          </DropdownMenuItem>
          <DropdownMenuItem className="text-[1.4rem]">
            Spoil me!
          </DropdownMenuItem>
          <DropdownMenuItem className="text-[1.4rem]">
            Gallery
          </DropdownMenuItem>
          <DropdownMenuItem className="text-[1.4rem]">
            Blog
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem>
          <div className="flex flex-col">
            <Button
              variant="outline"
              className="
            block
            bg-transparent
            font-extralight
            text-[1.3rem]
            m-2
            leading-[2rem]
            pb-10
            text-purple-900
            shadow-purple-400
            hover:bg-amber-100
            hover:text-black-900
            hover:shadow-yellow-300
            hover:text-[1.2rem]
            hover:italic               
            "
            >
              Get in Touch💦
            </Button>
            <div className="flex justify-center gap-5 mt-3">
              <a href="https://x.com/meetericabrooks"><TwitterLogoIcon 
              style={{ width: '1.8rem', 
              height: '1.8rem', 
              stroke: "black",
              strokeWidth: "0.1" }}/>
              </a>
            </div>
          </div>

        </DropdownMenuItem>



      </DropdownMenuContent>
    </DropdownMenu>
  )
}
