import MainLayout from "../components/Layouts/MainLayout"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Account(){

    const navigate = useNavigate();

    // USE STATE
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const getAccountById = async () => {
        try {
            const id = localStorage.getItem("id");
            const base_url = "http://localhost:4000/api";
            const res = await axios.get(`${base_url}/account/${id}`);
            const { data } = res.data;
            setEmail(data.email);
        } catch (error) {
            setLoading(false);
            if (error.response) {
                const { data } = error.response;
                setError(true);
                setMessage(data.message);
            } else {
                setError(true);
                setMessage("An error occurred. Please try again.");
            }
        }
    }

    const updatePassword = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const id = localStorage.getItem("id");
            const base_url = "http://localhost:4000/api";
            const res = await axios.patch(`${base_url}/account/${id}/update_password`, {
                email,
                newPassword: password,
                confirmPassword
            });
            console.log(res.data);
            const { message } = res.data;
            setError(false);
            setSuccess(true);
            setMessage(message);
            setLoading(false);
            navigate("/account");
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

    const logOut = (e) => {
        e.preventDefault();
        localStorage.setItem("isLogin", false);
        localStorage.setItem("id", null);
        navigate("/login");
    }

    useEffect(() => {

        const isLogin = localStorage.getItem("isLogin");
        if (isLogin === "false") {
            navigate("/login"); 
        }

        getAccountById();
    }, [ navigate ]);

    return (
        <MainLayout className="w-full min-h-screen px-4 flex items-center justify-center bg-gray-200">
            <div  className="w-full max-w-screen-sm py-6 px-4 bg-white">
                <form onSubmit={updatePassword}>
                    <h1 className="text-lg font-medium uppercase mb-4">Account</h1>

                    {error && <p className="text-red-500 mb-4">{message}</p>}
                    {success && <p className="text-green-500 mb-4">{message}</p>}


                    <input 
                        type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled
                        className="w-full p-2 border mb-4 outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    />

                    <input 
                        type="text" 
                        placeholder="**********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border mb-4 outline-none"
                    />
                    
                    <input 
                        type="text" 
                        placeholder="**********"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-2 border mb-4 outline-none"
                    />

                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-2">
                        {loading ? "Loading..." : "Update Password"}
                    </button>
                </form>

                <button id="logout" onClick={logOut} className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Log Out</button>
            </div>
        </MainLayout>
    )
}