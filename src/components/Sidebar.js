import { Heart, Home } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
     <DesktopSidebar/>
     <MobileSidebar/>
    </div>
  )
}

export default Sidebar


const DesktopSidebar = ()=>{

    return(
        <div className="p-3 md:p-10 border-r min-h-screen w-24 lg:w-64  hidden  sm:block">
            <div className="flex flex-col gap-20 sticky top-10 left-0">
                <div className="w-full">
                    <img src="/logo.svg" alt="logo.svg" className="hidden md:block" ></img>
                    <img src="/mobile-logo.svg" alt="" className="block md:hidden" ></img>
                </div>

                <ul className="flex flex-col items-center md:items-start gap-8">
                    <Link to="/" className="flex gap-1 " >
                    <Home size={24} />
                    <span className="font-bold hidden md:block sm:hidden">Home</span>
                    
                    </Link>

                    <Link to="/favorites" className="flex gap-1 " >
                    <Heart size={24} />
                    <span className="font-bold hidden md:block"  >Favorites</span>
                    
                    </Link>

                </ul>

            </div>

        </div>
    )

}

const MobileSidebar = ()=>{
    return(
        <div className="flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 z-10 p-2  bg-white sm:hidden">
           <Link to="/" >
           <Home size={24} className="cursor-pointer"  ></Home>
           
           </Link> 
           <Link to="/favorites">
           <Heart size={24} className="cursor-pointer" ></Heart>

           
           </Link>
            
        </div>
    )

}
