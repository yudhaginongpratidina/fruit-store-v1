// LIBS
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"

// ICONS
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {

    const Login = localStorage.getItem("isLogin");
    console.log(Login);
    const [isLogin, setIsLogin] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigate = useNavigate();

    const handleMenuToggle = (e) => {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    }

    const logOut = (e) => {
        e.preventDefault();
        localStorage.setItem("isLogin", false);
        localStorage.setItem("id", null);
        navigate("/login");
    }

    useEffect(() => {
        const loginStatus = localStorage.getItem("isLogin");
        console.log(loginStatus);
        

        if (loginStatus === "true") {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, [isLogin])

    return (
        <nav className="fixed top-0 z-10 w-full">

            <div className="w-full h-14 px-6 box-border flex items-center justify-between border-b-2 border-blue-500 bg-white">

                <div className="flex items-center">
                    <h1 className="text-lg font-medium">Fruit Store</h1>
                </div>


                <div className="flex md:hidden items-center gap-4">
                    <Link to={"/cart"} className="p-1.5 border border-blue-500">
                        <FaShoppingCart className="w-6 h-6" />
                    </Link>
                    <button onClick={handleMenuToggle} className="p-1.5 border border-blue-500">
                        {isMenuOpen
                            ? <IoMdClose className="w-6 h-6" />
                            : <GiHamburgerMenu className="w-6 h-6" />
                        }
                    </button>
                </div>


                <div className="hidden md:flex items-center gap-4">
                    <Link to={"/"} className="text-lg font-medium hover:text-blue-500">Home</Link>
                    {isLogin
                        ? <Link to={"/fruit"} className="text-lg font-medium hover:text-blue-500">Fruit</Link>
                        : null
                    }
                    {isLogin
                        ? <Link to={"/category"} className="text-lg font-medium hover:text-blue-500">Category</Link>
                        : null
                    }
                    
                    {isLogin
                        ? null
                        : <Link to={"/login"} className="py-1.5 px-4 text-lg font-medium text-white bg-blue-500 hover:bg-blue-600">Login</Link>
                    }
                    <Link to={"/cart"} className="p-1.5 border border-blue-500">
                        <FaShoppingCart className="w-6 h-6" />
                    </Link>

                    {isLogin
                        ? <Link to={"/account"} className="p-1.5 border border-blue-500"><MdAccountCircle className="w-6 h-6" /></Link>
                        : null
                    }
                </div>
            </div>

            {isMenuOpen && (
                <div className="w-full md:hidden px-4 py-6 flex flex-col gap-4 bg-white">
                    <Link to={"/"} className="text-lg font-medium hover:text-blue-500">Home</Link>
                    {isLogin
                        ? <Link to={"/fruit"} className="text-lg font-medium hover:text-blue-500">Fruit</Link>
                        : null
                    }
                    {isLogin
                        ? <Link to={"/category"} className="text-lg font-medium hover:text-blue-500">Category</Link>
                        : null
                    }

                    {
                        isLogin
                            ? <button onClick={logOut} className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Log Out</button>
                            : <Link to={"/login"} className="py-1.5 px-4 text-lg font-medium text-white bg-blue-500 hover:bg-blue-600">Login</Link>
                    }
                </div>
            )}
        </nav>
    )
}