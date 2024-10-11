import MainLayout from "../components/Layouts/MainLayout"

export default function Account(){
    return (
        <MainLayout className="w-full min-h-screen px-4 flex items-center justify-center bg-gray-200">
            <div className="w-full max-w-screen-sm py-6 px-4 bg-white">
                <h1 className="text-lg font-medium uppercase mb-4">Account</h1>

                <input 
                    type="email" 
                    placeholder="Email"
                    value={""}
                    disabled
                    className="w-full p-2 border mb-4 outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                />

                <input 
                    type="password" 
                    placeholder="**********"
                    value={""}
                    className="w-full p-2 border mb-4 outline-none"
                />
                
                <input 
                    type="password" 
                    placeholder="**********"
                    value={""}
                    className="w-full p-2 border mb-4 outline-none"
                />

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-2">Update Password</button>
                <button className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Log Out</button>

            </div>
        </MainLayout>
    )
}