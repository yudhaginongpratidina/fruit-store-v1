// ICONS
import { FaShoppingCart } from "react-icons/fa";

export default function CartCheckout() {
    return (
        <div className="fixed bottom-0 z-10 w-full h-14 px-4 box-border border-t-2 flex items-center justify-between border-t-blue-500 bg-white">
            <span className="text-lg font-medium">Rp. 1.000.000</span>
            <button className="py-2 px-4 flex items-center gap-2 text-sm font-medium text-white bg-blue-500">
                <FaShoppingCart className="w-5 h-5" />
                <span>Checkout</span>
            </button>
        </div>
    )
}