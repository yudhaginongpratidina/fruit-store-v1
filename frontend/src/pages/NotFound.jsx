// LIBS
import { Link } from "react-router-dom"

// COMPONENTS
import MainLayout from "../components/Layouts/MainLayout"



export default function NotFound(){
    return (
        <MainLayout className="w-full min-h-screen flex items-center justify-center">
            
            <div className="w-full max-w-screen-sm h-[400px] flex flex-col items-center gap-6 justify-center border-2 border-y-blue-500">
                <h1 className="text-6xl font-bold">404</h1>
                <h2 className="text-3xl">Page Not Found</h2>

                <Link to={"/"} className="py-2.5 px-6 text-lg font-medium border border-blue-500 hover:text-blue-500">Go Home</Link>
            </div>

        </MainLayout>
    )
}