import { useState, useEffect } from "react";
import axios from "axios";
import ProductCategoryItem from "../Product/ProductCategoryItem";

export default function ProductCategoryList() {

    const [category, setCategory] = useState([]);

    const getAllCategory = async () => {
        try {
            const base_url = "http://localhost:4000/api/";
            const res = await axios.get(base_url + "/category");
            const { data } = res.data
            setCategory(data);
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
        getAllCategory();
    }, []);

    return (
        <>
            <div className="w-full p-4 flex flex-wrap gap-1.5">
                {category.map((item, index) => (
                    <ProductCategoryItem key={index} category={item.name} />
                ))}
            </div>
        </>
    )
}