// LIBS
import { useState, useEffect } from "react";
import axios from "axios";

// COMPONENTS
import ProductItem from "../Product/ProductItem"


export default function ProductList() {

    
    const [fruit, setFruit] = useState([]);

    const getAllFruit = async () => {
        try {
            const base_url = "http://localhost:4000/api/";
            const res = await axios.get(base_url + "/product");
            const { data } = res.data
            setFruit(data);
        } catch (error) {
            if (error.response) {
                const { data } = error.response;
                console.log(data);
            } else {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        getAllFruit();
    }, []);

    // console.log(fruit);

    return (
        <>
            <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
                {
                    fruit.map((item, index) => (
                        <ProductItem key={index} id={item.id} imageUrl={item.imageUrl} name={item.name} category={item.category.name} price={item.price} />
                    ))
                }
            </div>
        </>
    )
}