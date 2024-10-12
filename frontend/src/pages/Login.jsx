import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

    // USE STATE
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // FUNCTION LOGIN
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setSuccess(false);
        setMessage("");

        try {
            const base_url = "http://localhost:4000/api";
            const res = await axios.post(base_url + "/login", {
                email,
                password
            });

            console.log(res.data.data);

            setLoading(false);
            setSuccess(true);
            setMessage(res.data.message);

            // simpan datanya id di local storage
            localStorage.setItem("id", res.data.data);
            localStorage.setItem("isLogin", true);

            navigate("/");

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
    };

    return (
        <div className="w-full min-h-screen px-4 flex items-center justify-center bg-gray-200">
            <form onSubmit={handleSubmit} className="w-full max-w-screen-sm py-6 px-4 rounded-sm bg-white">
                <h1 className="text-lg font-medium uppercase mb-4">Login</h1>

                {error && <p className="text-red-500 mb-4">{message}</p>}
                {success && <p className="text-green-500 mb-4">{message}</p>}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border mb-4 outline-none focus:border-blue-500"
                />

                <input
                    type="password"
                    placeholder="******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border mb-4 outline-none focus:border-blue-500"
                />

                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4">
                    {loading ? "Loading..." : "Login"}
                </button>

                <div className="w-full flex justify-center">
                    <Link to={"/register"} className="text-blue-500">I dont have an account</Link>
                </div>
            </form>
        </div>
    );
}
