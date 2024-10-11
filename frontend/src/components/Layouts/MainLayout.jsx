import Navbar from "../Navbar/Navbar"


export default function MainLayout({ children, className }) {
    return (
        <div className={className}>
            <Navbar />
            {children}
        </div>
    )
}