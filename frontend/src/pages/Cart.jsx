// LAYOUT
import MainLayout from "../components/Layouts/MainLayout"

// COMPONENTS
import CartList from "../components/Cart/CartList";
import CartCheckout from "../components/Cart/CartCheckout";

export default function Cart(){
    return (
        <MainLayout className="w-full min-h-screen py-16  bg-gray-200">
            <CartList />
            <CartCheckout />
        </MainLayout>
    )
}