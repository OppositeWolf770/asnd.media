import { NavLink } from "react-router-dom"


export default function Footer() {
    return(
        <>
        <nav className="footer">
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/packages"}>Boost Packages</NavLink>
            <NavLink to={"/contact"}>Contact Us</NavLink>
        </nav>
        </>
    )
}