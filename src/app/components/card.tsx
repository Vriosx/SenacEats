import { Heart, Star } from "lucide-react";
import Link from "next/link";

export function Card(){
    return(
        <div className="flex flex-col items-center w-48 relative">
            <Heart className="absolute right-7 top-2 text-red-600 hover:fill-red-500 transition-colors duration-5000"/>
            <img className="w-36 rounded" src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/> 
            <h4 className="line-clamp-1">Titulo do filme</h4>
            <div className=" flex gap-2">

            <Star className="text-amber-400"/>
                <span className="opacity-50 ">9.9</span>
            </div>

            <Link href="#" className="bg-amber-300 px-8 py-1 rounded hover:bg-amber-600 transition-colors duration-1000 text-white">
                detalhes</Link>
                
        </div>
    )
}