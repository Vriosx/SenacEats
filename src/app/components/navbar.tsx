import Link from "next/link"

export function NavBar(){
    
    return(
        <nav className="flex justify-between items-center bg-gray-100 w-full px-6 py-8">
            <Link href="/">
                <h1 className="text-4xl uppercase font-bold text-amber-500">
                    Senac Eats
                </h1>
            </Link>
            <Link className="text-black" href="/sobre">Sobre</Link>
        </nav>
    )
}