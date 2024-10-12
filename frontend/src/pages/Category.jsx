import { useState, useEffect } from "react";
import axios from "axios";
import MainLayout from "../components/Layouts/MainLayout";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function Category() {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [edit, setEdit] = useState(false);

    const [category, setCategory] = useState([]);
    const [categoryId, setCategoryId] = useState("");
    const [categoryName, setCategoryName] = useState("");

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
            const base_url = "http://localhost:4000/api/";
            const res = await axios.post(base_url + "/category", {
                name: categoryName,
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
    };



    const editCategory = async (id) => {
        try {
            setEdit(true);
            const base_url = "http://localhost:4000/api";
            const res = await axios.get(`${base_url}/category/${id}`);
            const { data } = res.data; // langsung ambil data dari res.data
            setCategoryId(data.id);
            setCategoryName(data.name);
            // console.log(res.data);
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

    const updateCategory = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const base_url = "http://localhost:4000/api";
            const res = await axios.patch(`${base_url}/category/${categoryId}`, {
                name: categoryName,
            });
            const { data } = res.data; // langsung ambil data dari res.data
            setCategoryId(data.id);
            setCategoryName(data.name);
            setEdit(false);
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


    const deleteCategory = async (id) => {
        try {
            const base_url = "http://localhost:4000/api";
            const res = await axios.delete(`${base_url}/category/${id}`);
            const data = res.data; // langsung ambil data dari res.data
            setCategory(data);
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
    };

    const navigate = useNavigate();
    useEffect(() => {
        const isLogin = localStorage.getItem("isLogin");
        if (isLogin === "false") {
            navigate("/login"); 
        }
        getAllCategory();
    }, [navigate]);

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

                        <form onSubmit={edit ? updateCategory : handleSubmit}>

                            {edit && (     
                                <input
                                    type="text"
                                    placeholder="Category Id"
                                    value={categoryId}
                                    onChange={(e) => setCategoryId(e.target.value)}
                                    disabled
                                    className="w-full p-2 border mb-4 outline-none focus:border-blue-500 rounded disabled:bg-gray-100 disabled:cursor-not-allowed"
                                />
                            )}
                            <input
                                type="text"
                                placeholder="Category Name"
                                value={categoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
                                className="w-full p-2 border mb-4 outline-none focus:border-blue-500 rounded"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4"
                            >
                                {loading ? "Loading..." : (edit ? "Edit Category" : "Add Category")}
                            </button>
                        </form>
                    </div>
                    <div className="w-full flex flex-col gap-4"> 
                        {Array.isArray(category) && category.map((item) => (
                            <div key={item.id} className="w-full border py-2 px-4 rounded flex items-center justify-between">
                                <h1 className="text-md capitalize">{item.name}</h1>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => editCategory(item.id)} className="border p-1.5 bg-blue-500 text-white">
                                        <FaEdit className="w-6 h-6" />
                                    </button>
                                    <button onClick={() => deleteCategory(item.id)} className="border p-1.5 bg-rose-500 text-white">
                                        <FaTrash className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
