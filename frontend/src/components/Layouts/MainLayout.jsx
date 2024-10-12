import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"


export default function MainLayout({ children, className }) {
    return (
        <div className={className}>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}