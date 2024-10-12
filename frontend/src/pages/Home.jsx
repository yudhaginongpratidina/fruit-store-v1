// COMPONENTS
import MainLayout from "../components/Layouts/MainLayout"
import ProductCategoryList from "../components/Product/ProductCategoryList";
import ProductList from "../components/Product/ProductList";


export default function Home(){
    return (
        <MainLayout className="w-full min-h-screen py-16 bg-gray-100">

            <div className="w-full h-[250px] md:h-[320px] bg-blue-500"></div>
            <ProductCategoryList />
            <ProductList />

        </MainLayout>
    )
}