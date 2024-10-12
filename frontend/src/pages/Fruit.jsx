import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import MainLayout from "../components/Layouts/MainLayout"

export default function Fruit() {

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [edit, setEdit] = useState(false);

    const [category, setCategory] = useState([]);
    const [fruits, setFruits] = useState([]);
    const [fruitId, setFruitId] = useState("");
    const [fruitImageUrl, setFruitImageUrl] = useState("");
    const [fruitName, setFruitName] = useState("");
    const [fruitCategoryId, setFruitCategoryId] = useState("");
    const [fruitPrice, setFruitPrice] = useState("");

    const getAllFruits = async () => {
        try {
            const base_url = "http://localhost:4000/api/";
            const res = await axios.get(base_url + "/product");
            const { data } = res.data
            setFruits(data);
        } catch (error) {
            setLoading(false);
            if (error.response) {
                const { data } = error.response;
                setSuccess(false);
                setError(true);
                setMessage(data.message);
            } else {
                setSuccess(false);
                setError(true);
                setMessage("An error occurred. Please try again.");
            }
        }
    }

    const getAllCategory = async () => {
        try {
            const base_url = "http://localhost:4000/api/";
            const res = await axios.get(base_url + "/category");
            const { data } = res.data
            setCategory(data);
        } catch (error) {
            setLoading(false);
            if (error.response) {
                const { data } = error.response;
                setSuccess(false);
                setError(true);
                setMessage(data.message);
            } else {
                setSuccess(false);
                setError(true);
                setMessage("An error occurred. Please try again.");
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // console.log(fruitName, fruitCategoryId, fruitPrice);
            const base_url = "http://localhost:4000/api";
            const res = await axios.post(`${base_url}/product`, {
                imageUrl: fruitImageUrl,
                name: fruitName,
                categoryId: fruitCategoryId,
                price: fruitPrice
            });

            setLoading(false);
            setError(false);
            setSuccess(true);
            setMessage(res.data.message);
            console.log(res.data);
        } catch (error) {
            setLoading(false);
            if (error.response) {
                const { data } = error.response;
                setSuccess(false);
                setError(true);
                setMessage(data.message);
            } else {
                setSuccess(false);
                setError(true);
                setMessage("An error occurred. Please try again.");
            }
        }
    }

    const editFruit = async (id) => {
        try {
            setEdit(true);
            const base_url = "http://localhost:4000/api";
            const res = await axios.get(`${base_url}/product/${id}`);
            const { data } = res.data;
            setFruitId(data.id);
            setFruitImageUrl(data.imageUrl);
            setFruitName(data.name);
            setFruitCategoryId(data.categoryId);
            setFruitPrice(data.price);
        } catch (error) {
            setLoading(false);
            if (error.response) {
                const { data } = error.response;
                setSuccess(false);
                setError(true);
                setMessage(data.message);
            } else {
                setSuccess(false);
                setError(true);
                setMessage("An error occurred. Please try again.");
            }
        }
    }

    const deleteFruit = async (id) => {
        try {
            const base_url = "http://localhost:4000/api";
            const res = await axios.delete(`${base_url}/product/${id}`);
            const { data } = res.data;

            setFruits(data);
        } catch (error) {
            if (error.response) {
                const { data } = error.response;
                setSuccess(false);
                setError(true);
                setMessage(data.message);
            } else {
                setSuccess(false);
                setError(true);
                setMessage("An error occurred. Please try again.");
            }
        }
    }

    const updateFruit = async (e) => {
        e.preventDefault();

        try {
            const base_url = "http://localhost:4000/api";
            const res = await axios.patch(`${base_url}/product/${fruitId}`, {
                name: fruitName,
                categoryId: fruitCategoryId,
                price: fruitPrice
            });

            setEdit(false);
            setFruitId("");
            setFruitName("");
            setFruitCategoryId("");
            setFruitPrice("");
            setSuccess(true);
            setMessage(res.data.message);
            console.log(res.data);
        } catch (error) {
            if (error.response) {
                const { data } = error.response;
                setSuccess(false);
                setError(true);
                setMessage(data.message);
            } else {
                setSuccess(false);
                setError(true);
                setMessage("An error occurred. Please try again.");
            } 
        }
    }

    useEffect(() => {
        getAllFruits();
        getAllCategory();
    }, [])

    // console.log(fruits);

    return (
        <MainLayout className="w-full min-h-screen py-16 px-4 flex justify-center bg-gray-200">
            <div className="w-full max-w-screen-sm bg-white">
                <div className="border-b-2 border-blue-500 p-4">
                    <h1 className="text-lg font-medium">FRUIT CATEGORY</h1>
                </div>
                <div className="w-full p-4 flex flex-col gap-4">
                    <div className="w-full">

                        {error && <p className="text-red-500 mb-4">{message}</p>}
                        {success && <p className="text-green-500 mb-4">{message}</p>}

                        <form onSubmit={edit ? updateFruit : handleSubmit}>
                            {edit && (
                                <input
                                    type="text"
                                    placeholder="Category Id"
                                    value={fruitId}
                                    onChange={(e) => setFruitId(e.target.value)}
                                    disabled
                                    className="w-full p-2 border mb-4 outline-none focus:border-blue-500 rounded disabled:bg-gray-100 disabled:cursor-not-allowed"
                                />
                            )}
                            <input
                                type="text"
                                placeholder="Fruit Image URL"
                                value={fruitImageUrl}
                                onChange={(e) => setFruitImageUrl(e.target.value)}
                                className="w-full p-2 border mb-4 outline-none focus:border-blue-500 rounded"
                            />
                            <input
                                type="text"
                                placeholder="Fruit Name"
                                value={fruitName}
                                onChange={(e) => setFruitName(e.target.value)}
                                className="w-full p-2 border mb-4 outline-none focus:border-blue-500 rounded"
                            />
                            <select
                                name="category"
                                id="category"
                                className="w-full p-2 border mb-4 outline-none focus:border-blue-500 rounded disabled:bg-gray-100 disabled:cursor-not-allowed"
                                value={fruitCategoryId}
                                onChange={(e) => setFruitCategoryId(e.target.value)}
                            >
                                <option value="">-- Select Category --</option>
                                {Array.isArray(category) && category.map((c) => (
                                    <option key={c.id} value={c.id}>{c.name}</option>
                                ))}
                            </select>

                            <input
                                type="text"
                                placeholder="Price"
                                value={fruitPrice}
                                onChange={(e) => setFruitPrice(e.target.value)}
                                className="w-full p-2 border mb-4 outline-none focus:border-blue-500 rounded"
                            />

                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4"
                            >
                                {loading ? "Loading..." : (edit ? "Edit Fruit" : "Add Fruit")}
                            </button>
                        </form>
                    </div>

                    <div className="w-full flex flex-col gap-4">
                        {Array.isArray(fruits) && fruits.map((f) => (
                            <div className="w-full border py-2 px-4 rounded flex items-center justify-between" key={f.id}>
                                <div className="flex flex-col gap-0.5">
                                    <div className="flex items-center gap-1.5">
                                        <h1 className="text-md capitalize">{f.name}</h1>
                                        <p className="text-xs bg-blue-500 text-white px-1.5 py-1 rounded text-center">{f.category.name}</p>
                                    </div>
                                    <span>Rp. {f.price}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => editFruit(f.id)} className="border p-1.5 bg-blue-500 text-white">
                                        <FaEdit className="w-6 h-6" />
                                    </button>
                                    <button onClick={() => deleteFruit(f.id)} className="border p-1.5 bg-rose-500 text-white">
                                        <FaTrash className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}