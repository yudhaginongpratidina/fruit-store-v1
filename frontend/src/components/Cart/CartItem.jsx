import { useState } from "react";

import { FaTrash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";

export default function CartItem(){

    const [quantity, setQuantity] = useState(0);

    const handleAddQuantity = (e) => {
        e.preventDefault()
        setQuantity(quantity + 1)
    }

    const handleDecreaseQuantity = (e) => {
        e.preventDefault()
        
        if (quantity > 0) {
            setQuantity(quantity - 1)
        } else {
            setQuantity(0)
        }
    }

    const handleRemoveItem = (e) => {
        e.preventDefault()
        setQuantity(0)
    }

    return (
        <div className="w-full flex flex-col gap-2.5 items-center py-2 px-4 border">
            <div className="w-full flex flex-col gap-2.5">
                {/* NAME AND QUANTITY */}
                <div className="flex items-center gap-1">
                    <h1 className="text-md font-medium">Apple Watch</h1>
                    <span>( {quantity} )</span>
                </div>
                
                {/* PRICE (UNIT AND SUBTOTAL) */}
                <div className="flex flex-col">
                    <span>Unit Price: 1.000.000</span>
                    <span>Sub Total: 1.000.000</span>
                </div>
            </div>

            {/* ACTIONS (PLUS, MINUS, REMOVE) */}
            <div className="w-full grid grid-cols-3 gap-2 text-white">
                <div onClick={handleAddQuantity} className="w-full h-10 flex items-center justify-center bg-blue-500 hover:bg-blue-600">
                    <IoMdAdd className="w-5 h-5" />
                </div>
                <div onClick={handleDecreaseQuantity} className="w-full h-10 flex items-center justify-center bg-yellow-500 hover:bg-yellow-600">
                    <FaMinus className="w-5 h-5" />
                </div>
                <div onClick={handleRemoveItem} className="w-full h-10 flex items-center justify-center bg-red-500 hover:bg-red-600">
                    <FaTrash className="w-5 h-5" />
                </div>
            </div>
        </div>
    )
}