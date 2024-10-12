import { useState, useEffect } from "react";
// ICONS
import { FaShoppingCart } from "react-icons/fa";

// COMPONENTS
import CartItem from "./CartItem";

export default function CartList() {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cart = localStorage.getItem("cart");
        const cartArr = JSON.parse(cart);
        setCartItems(cartArr || []); // Menambahkan fallback array kosong jika cartArr null
    }, []); // Array kosong memastikan efek hanya berjalan sekali setelah mount

    // console.log(cartItems);
    return (
        <div className="w-full px-4">
            <div className="w-full max-w-screen-lg mx-auto p-4 bg-white">
                <div className="w-full flex items-center gap-2 border-b-2 border-blue-500 py-2">
                    <FaShoppingCart className="w-5 h-5" />
                    <h1 className="text-lg font-medium">CART</h1>
                </div>

                <div className="w-full py-2 flex flex-col gap-4">
                    {cartItems.map((item) => (
                        <CartItem 
                            key={item.id} 
                            name={item.name} 
                            quantity={item.quantity} 
                            unitPrice={item.price}  
                            SubTotal={item.price * item.quantity}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
