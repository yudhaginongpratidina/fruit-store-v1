// COMPONENTS
import MainLayout from "../components/Layouts/MainLayout"

import ProductItem from "../components/Product/ProductItem"
import ProductCategoryItem from "../components/Product/ProductCategoryItem"

export default function Home(){
    return (
        <MainLayout className="w-full min-h-screen py-16 bg-gray-100">

            <div className="w-full h-[250px] md:h-[320px] bg-blue-500">

            </div>

            <div className="w-full p-4 flex flex-wrap gap-1.5">
                <ProductCategoryItem category="All"/>
                <ProductCategoryItem category="Pisang"/>
                <ProductCategoryItem category="Pisang"/>
            </div>

            <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>

        </MainLayout>
    )
}