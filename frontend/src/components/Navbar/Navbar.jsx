// LIBS
import { Link } from "react-router-dom"

// ICONS
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar(){
    return (
        <nav className="fixed top-0 z-10 w-full h-14 px-6 box-border flex items-center justify-between border-b-2 border-blue-500 bg-white">
            <div className="flex items-center">
                <h1 className="text-lg font-medium">Fruit Store</h1>
            </div>
            <div className="flex items-center gap-4">
                <Link to={"/"} className="text-lg font-medium hover:text-blue-500">Home</Link>
                <Link to={"/"} className="p-1.5 border border-blue-500">
                    <FaShoppingCart className="w-6 h-6" />
                </Link>
            </div>
        </nav>
    )
}