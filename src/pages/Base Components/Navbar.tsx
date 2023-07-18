import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <>
        <nav className="topnav">
            <NavLink to={"/"}><img className="ASNDlogo" src="/assets/ASND-logo.png" alt="ASND Media Logo" /></NavLink>
            <div className="topnav--links">
                <NavLink to={"/about"}>About Us</NavLink>
                <NavLink to={"/packages"}>Boost Packages</NavLink>
                <NavLink to={"/contact"}>Contact Us</NavLink>
                <NavLink to={"/portfolio"}>Portfolio</NavLink>
            </div>
        </nav>

        </>
    )
}