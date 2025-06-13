// NavMenue.tsx 
import { Button } from "@/components/ui/button"
import { TwitterLogoIcon, DropdownMenuIcon} from "@radix-ui/react-icons"
import { Link } from "react-router-dom"
import { useState } from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavMenue() {
  const [open, setOpen] = useState(false)

  const handleMenuItemClick = () => {
    setOpen(false) // Close menu when item is clicked
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <DropdownMenuIcon 
          width="2rem"
          height="2rem"
          className="
            md:hidden
            sm:block
            stroke-gray-200
            stroke-[0.5]
            cursor-pointer              
          "
        /> 
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-screen 
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
          <DropdownMenuItem asChild>
            <Link 
              to="/" 
              className="text-[1.4rem] w-full text-center"
              onClick={handleMenuItemClick}
            >
              Home
            </Link>
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild>
            <Link 
              to="/booking-faq" 
              className="text-[1.4rem] w-full text-center"
              onClick={handleMenuItemClick}
            >
              Booking a Session (FAQ)
            </Link>
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild>
            <Link 
              to="/contact" 
              className="text-[1.4rem] w-full text-center"
              onClick={handleMenuItemClick}
            >
              Contact
            </Link>
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild>
            <Link 
              to="/tour-dates" 
              className="text-[1.4rem] w-full text-center"
              onClick={handleMenuItemClick}
            >
              Tour Dates & Locations
            </Link>
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild>
            <Link 
              to="/spoil-me" 
              className="text-[1.4rem] w-full text-center"
              onClick={handleMenuItemClick}
            >
              Spoil me!
            </Link>
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild>
            <Link 
              to="/gallery" 
              className="text-[1.4rem] w-full text-center"
              onClick={handleMenuItemClick}
            >
              Gallery
            </Link>
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild>
            <Link 
              to="/blog" 
              className="text-[1.4rem] w-full text-center"
              onClick={handleMenuItemClick}
            >
              Blog
            </Link>
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
              asChild
            >
              <Link 
                to="/contact"
                onClick={handleMenuItemClick}
              >
                Get in Touch💦
              </Link>
            </Button>
            <div className="flex justify-center gap-5 mt-3">
              <a href="https://x.com/meetericabrooks">
                <TwitterLogoIcon 
                  style={{ 
                    width: '1.8rem', 
                    height: '1.8rem', 
                    stroke: "black",
                    strokeWidth: "0.1" 
                  }}
                />
              </a>
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// // NavMenue.tsx 
// import { Button } from "@/components/ui/button"
// import { TwitterLogoIcon, DropdownMenuIcon} from "@radix-ui/react-icons"
// import { Link } from "react-router-dom"

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// export function NavMenue() {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <DropdownMenuIcon 
//           width="2rem"
//           height="2rem"
//           className="
//             md:hidden
//             sm:block
//             stroke-gray-200
//             stroke-[0.5]              
//           "
//         /> 
//       </DropdownMenuTrigger>
//       <DropdownMenuContent 
//         className="w-screen 
//           h-screen 
//           bg-red-100
//           flex
//           flex-col
//           items-center
//           gap-4
//           duration-850 
//           ease-linear
//           transition-all
//         "
//         align="start"
//       >
//         <DropdownMenuGroup className="
//           flex flex-col justify-between items-center 
//           h-[70%]  
//           font-[Questrial]
//           mt-2
//         ">
//           <DropdownMenuItem asChild>
//             <Link to="/" className="text-[1.4rem] w-full text-center">
//               Home
//             </Link>
//           </DropdownMenuItem>
          
//           <DropdownMenuItem asChild>
//             <Link to="/booking-faq" className="text-[1.4rem] w-full text-center">
//               Booking a Session (FAQ)
//             </Link>
//           </DropdownMenuItem>
          
//           <DropdownMenuItem asChild>
//             <Link to="/contact" className="text-[1.4rem] w-full text-center">
//               Contact
//             </Link>
//           </DropdownMenuItem>
          
//           <DropdownMenuItem asChild>
//             <Link to="/tour-dates" className="text-[1.4rem] w-full text-center">
//               Tour Dates & Locations
//             </Link>
//           </DropdownMenuItem>
          
//           <DropdownMenuItem asChild>
//             <Link to="/spoil-me" className="text-[1.4rem] w-full text-center">
//               Spoil me!
//             </Link>
//           </DropdownMenuItem>
          
//           <DropdownMenuItem asChild>
//             <Link to="/gallery" className="text-[1.4rem] w-full text-center">
//               Gallery
//             </Link>
//           </DropdownMenuItem>
          
//           <DropdownMenuItem asChild>
//             <Link to="/blog" className="text-[1.4rem] w-full text-center">
//               Blog
//             </Link>
//           </DropdownMenuItem>
//         </DropdownMenuGroup>
        
//         <DropdownMenuItem>
//           <div className="flex flex-col">
//             <Button
//               variant="outline"
//               className="
//                 block
//                 bg-transparent
//                 font-extralight
//                 text-[1.3rem]
//                 m-2
//                 leading-[2rem]
//                 pb-10
//                 text-purple-900
//                 shadow-purple-400
//                 hover:bg-amber-100
//                 hover:text-black-900
//                 hover:shadow-yellow-300
//                 hover:text-[1.2rem]
//                 hover:italic               
//               "
//               asChild
//             >
//               <Link to="/contact">
//                 Get in Touch💦
//               </Link>
//             </Button>
//             <div className="flex justify-center gap-5 mt-3">
//               <a href="https://x.com/meetericabrooks">
//                 <TwitterLogoIcon 
//                   style={{ 
//                     width: '1.8rem', 
//                     height: '1.8rem', 
//                     stroke: "black",
//                     strokeWidth: "0.1" 
//                   }}
//                 />
//               </a>
//             </div>
//           </div>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }

// // import { Button } from "@/components/ui/button"
// // import { TwitterLogoIcon, DropdownMenuIcon} from "@radix-ui/react-icons"

// // import {
// //   DropdownMenu,
// //   DropdownMenuContent,
// //   DropdownMenuGroup,
// //   DropdownMenuItem,
// //   DropdownMenuTrigger,
// // } from "@/components/ui/dropdown-menu"

// // export function NavMenue() {
// //   return (
// //     <DropdownMenu>
// //       <DropdownMenuTrigger asChild>
// //         {/* <Button variant="outline">Open</Button> */}
// //         <DropdownMenuIcon 
// //                         width="2rem"
// //                         height="2rem"
// //                         className="
// //                         md:hidden
// //                         sm:block
// //                         stroke-gray-200
// //                         stroke-[0.5]              
// //                         "
// //                         /> 
// //       </DropdownMenuTrigger>
// //       <DropdownMenuContent className="w-screen 
// //       h-screen 
// //       bg-red-100
// //       flex
// //       flex-col
// //       items-center
// //       gap-4
// //       duration-850 
// //       ease-linear
// //       transition-all
// //       "
// //         align="start"
// //       >
// //         <DropdownMenuGroup className="
// //         flex flex-col justify-between items-center 
// //         h-[70%]  
// //         font-[Questrial]
// //         mt-2
// //         ">
// //           <DropdownMenuItem className="text-[1.4rem]">
// //             Home
// //           </DropdownMenuItem>
// //           <DropdownMenuItem className="text-[1.4rem]">
// //             Booking a Session (FAQ)
// //           </DropdownMenuItem>
// //           <DropdownMenuItem className="text-[1.4rem]">
// //             Contact
// //           </DropdownMenuItem>
// //           <DropdownMenuItem className="text-[1.4rem]">
// //             Tour Dates & Locations
// //           </DropdownMenuItem>
// //           <DropdownMenuItem className="text-[1.4rem]">
// //             Spoil me!
// //           </DropdownMenuItem>
// //           <DropdownMenuItem className="text-[1.4rem]">
// //             Gallery
// //           </DropdownMenuItem>
// //           <DropdownMenuItem className="text-[1.4rem]">
// //             Blog
// //           </DropdownMenuItem>
// //         </DropdownMenuGroup>
// //         <DropdownMenuItem>
// //           <div className="flex flex-col">
// //             <Button
// //               variant="outline"
// //               className="
// //             block
// //             bg-transparent
// //             font-extralight
// //             text-[1.3rem]
// //             m-2
// //             leading-[2rem]
// //             pb-10
// //             text-purple-900
// //             shadow-purple-400
// //             hover:bg-amber-100
// //             hover:text-black-900
// //             hover:shadow-yellow-300
// //             hover:text-[1.2rem]
// //             hover:italic               
// //             "
// //             >
// //               Get in Touch💦
// //             </Button>
// //             <div className="flex justify-center gap-5 mt-3">
// //               <a href="https://x.com/meetericabrooks"><TwitterLogoIcon 
// //               style={{ width: '1.8rem', 
// //               height: '1.8rem', 
// //               stroke: "black",
// //               strokeWidth: "0.1" }}/>
// //               </a>
// //             </div>
// //           </div>

// //         </DropdownMenuItem>



// //       </DropdownMenuContent>
// //     </DropdownMenu>
// //   )
// // }
