import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function CartItem(props){

    const {id, name, unitPrice, quantity, SubTotal, } = props
    const navigate = useNavigate()

    const handleRemoveItem = (e) => {
        e.preventDefault()

        const login = localStorage.getItem("isLogin")
        if (login === "false") {
            navigate("/login")
            return
        }

        const cart = localStorage.getItem("cart")
        const cartArr = JSON.parse(cart)
        const index = cartArr.findIndex((item) => item.id === id)
        cartArr.splice(index, 1)
        localStorage.setItem("cart", JSON.stringify(cartArr))

        navigate("/")
    }

    return (
        <div className="w-full flex flex-col gap-2.5 items-center py-2 px-4 border">
            <div className="w-full flex flex-col gap-2.5">
                {/* NAME AND QUANTITY */}
                <div className="flex items-center gap-1">
                    <h1 className="text-md font-medium">{name}</h1>
                    <span>( {quantity} )</span>
                </div>
                
                {/* PRICE (UNIT AND SUBTOTAL) */}
                <div className="flex flex-col">
                    <span>Unit Price: {unitPrice} </span>
                    <span>Sub Total: {SubTotal}</span>
                </div>
            </div>

            {/* ACTIONS (PLUS, MINUS, REMOVE) */}
            <div onClick={handleRemoveItem} className="w-full h-10 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white">
                <FaTrash className="w-5 h-5" />
            </div>
        </div>
    )
}