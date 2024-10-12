// COMPONENTS
import MainLayout from "../components/Layouts/MainLayout"
import ProductList from "../components/Product/ProductList";


export default function Home(){
    return (
        <MainLayout className="w-full min-h-screen py-16 bg-gray-100">

            <div className="w-full h-[250px] md:h-[320px] flex items-center justify-center bg-blue-500">
                <h1 className="text-3xl font-bold text-white">FRUIT STORE</h1>
            </div>
            <ProductList />

        </MainLayout>
    )
}