import { Button } from "@/components/ui/button"
import { NavMenue } from "./NavMenue";
import { Link } from "react-router-dom";

interface HeaderProps {
    onContactClick: () => void
}

function Header({ onContactClick }: HeaderProps) {

    return (
        <>
            <div className="bg-red-100 p-8">
                <div className="flex flex-row justify-between">
                    
                    <div className="flex flex-col">
                        <Link to="/" className="cursor-pointer">
                            <h1 className="text-3xl font-[Jua] text-stone-800 text-left hover:text-stone-600 transition-colors">
                                Erica Brooks🐇👙
                            </h1>
                        </Link>
                        <p className="text-stone-600">
                            Companion | Authentic 
                        </p>
                    </div>

                    <div>
                        {/* Button for md+ screens - toggles contact form */}
                        <Button 
                            variant="outline"
                            className="
                                hidden
                                md:block
                                bg-transparent
                                font-extralight
                                text-[1rem]
                                text-stone-700
                                shadow-purple-400
                                hover:bg-amber-100
                                hover:text-black-900
                                hover:shadow-yellow-300
                                hover:text-[1.2rem]
                                hover:italic               
                            "
                            onClick={onContactClick}
                        >
                            Get in Touch💦
                        </Button>

                        {/* Navigation menu for smaller screens */}
                        <div className="
                            md:hidden
                            sm:block
                            stroke-gray-200
                            stroke-[0.5]              
                        ">
                            <NavMenue />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Header;

// import { Button } from "@/components/ui/button"
// import { NavMenue } from "./NavMenue";
// import { Link } from "react-router-dom";

// // Remove the onContactClick prop since we're using React Router now
// interface HeaderProps {
//     // onContactClick prop is no longer needed
// }

// function Header({}: HeaderProps) {

//     return (
//         <>
//             <div className="bg-red-100 p-8">
//                 <div className="flex flex-row justify-between">
                    
//                     <div className="flex flex-col">
//                         <Link to="/" className="cursor-pointer">
//                             <h1 className="text-3xl font-[Jua] text-stone-800 text-left hover:text-stone-600 transition-colors">
//                                 Erica Brooks🐇👙
//                             </h1>
//                         </Link>
//                         <p className="text-stone-600">
//                             Companion | Authentic 
//                         </p>
//                     </div>

//                     <div>
//                         <Button 
//                             variant="outline"
//                             className="
//                                 hidden
//                                 md:block
//                                 bg-transparent
//                                 font-extralight
//                                 text-[1rem]
//                                 text-stone-700
//                                 shadow-purple-400
//                                 hover:bg-amber-100
//                                 hover:text-black-900
//                                 hover:shadow-yellow-300
//                                 hover:text-[1.2rem]
//                                 hover:italic               
//                             "
//                             asChild
//                         >
//                             <Link to="/contact">
//                                 Get in Touch💦
//                             </Link>
//                         </Button>

//                         <div className="
//                             md:hidden
//                             sm:block
//                             stroke-gray-200
//                             stroke-[0.5]              
//                         ">
//                             <NavMenue />
//                         </div>
//                     </div>

//                 </div>

//             </div>
//         </>
//     )
// }

// export default Header;

// // import { Button } from "@/components/ui/button"
// // import { NavMenue } from "./NavMenue";

// // interface HeaderProps {
// //     onContactClick: () => void
// // }

// // function Header({onContactClick}: HeaderProps) {


// //     return (
// //         <>
// //             <div className="bg-red-100 p-8">
// //                 <div className="flex flex-row justify-between">
                    
// //                     <div className="flex flex-col">
// //                         <h1 className="text-3xl font-[Jua] text-stone-800 text-left">
// //                             Erica Brooks🐇👙
// //                         </h1>
// //                         <p className="text-stone-600">
// //                             Companion | Authentic 
// //                         </p>
// //                     </div>

// //                     <div>
// //                         <Button 
// //                         variant="outline"
// //                         className="
// //                         hidden
// //                         md:block
// //                         bg-transparent
// //                         font-extralight
// //                         text-[1rem]
// //                         text-stone-700
// //                         shadow-purple-400
// //                         hover:bg-amber-100
// //                         hover:text-black-900
// //                         hover:shadow-yellow-300
// //                         hover:text-[1.2rem]
// //                         hover:italic               
// //                         "

// //                         onClick={onContactClick}
// //                         >
// //                             Get in Touch💦
// //                         </Button>

// //                         {/* <DropdownMenuIcon 
// //                         width="2rem"
// //                         height="2rem"
// //                         className="
// //                         md:hidden
// //                         sm:block
// //                         stroke-gray-200
// //                         stroke-[0.5]              
// //                         "
// //                         /> */}
// //                         <div  className="
// //                         md:hidden
// //                         sm:block
// //                         stroke-gray-200
// //                         stroke-[0.5]              
// //                         ">
// //                         <NavMenue />

// //                         </div>


                        
// //                     </div>

// //                 </div>

// //             </div>
// //         </>
// //     )
// // }

// // export default Header;