
// type Props = {}

// const Navbar = (props: Props) => {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar


import { Link } from "react-router-dom"
import { ShoppingBagIcon } from '@heroicons/react/24/outline'


export function Navbar() {
    return (
        <div className=" bg-white shadow-sm mb-3  sticky">
            <div className=" px-3 py-2 flex">
                <div className="me-auto"> 
                   <Link to={"/"} className="  ml-1">
                       Home
                   </Link>
                   <Link to={"/store"} className="  ml-3" >
                       Store
                   </Link>
                   <Link to={"/about"} className="  ml-3">
                       About
                   </Link>
                </div>
                <button className="w-7 h-7 bg-white-400 rounded-full  outline outline-1 flex items-center justify-center relative">
                    <ShoppingBagIcon color="black" className="h-5 w-5" />
                    <span className="w-4 h-4 bottom-0 right-0 bg-red-500 text-white rounded-full  flex items-center justify-center absolute translate-y-1/4 translate-x-1/4" >4</span>

                 </button>
            </div>
        </div>
        ) 
    
}



// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='shadow-md w-full fixed top-0 left-0 '>
//         <div className='md:flex bg-blue-600 py-4'>
//             <div>
            
//                 dfdsf
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar