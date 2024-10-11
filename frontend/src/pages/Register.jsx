import { Link } from "react-router-dom"

export default function Register(){
    return (
        <div className="w-full min-h-screen px-4 flex items-center justify-center bg-gray-200">
            <div className="w-full max-w-screen-sm py-6 px-4 rounded-sm bg-white">
                <h1 className="text-lg font-medium uppercase mb-4">Register</h1>

                <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full p-2 border mb-4 outline-none focus:border-blue-500"
                />

                <input 
                    type="password" 
                    placeholder="******"
                    className="w-full p-2 border mb-4 outline-none focus:border-blue-500"
                />

                <input 
                    type="password" 
                    placeholder="******"
                    className="w-full p-2 border mb-4 outline-none focus:border-blue-500"
                />

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4">Register</button>

                <div className="w-full flex justify-center">
                    <Link to={"/login"} className="text-blue-500">I have an account</Link>
                </div>

            </div>
        </div>
    )
}