import Navbar from "./pages/Base Components/Navbar"
import Footer from "./pages/Base Components/Footer"
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