import Navbar from "./pages/Navbar"
import Footer from "./pages/Footer"
import Home from "./pages/Home/Home"

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </>
    )
}

export default Layout