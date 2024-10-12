// ICONS
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CartCheckout() {

    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const login = localStorage.getItem("isLogin")
        if (login === "false") {
            navigate("/login")
            return
        }


        const cart = localStorage.getItem("cart");
        const cartArr = JSON.parse(cart);
        const total = cartArr.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(total);
    }, []);

    return (
        <div className="fixed bottom-0 z-10 w-full h-14 px-4 box-border border-t-2 flex items-center justify-between border-t-blue-500 bg-white">
            <span className="text-lg font-medium">Total (Rp) : {total}</span>
        </div>
    )
}