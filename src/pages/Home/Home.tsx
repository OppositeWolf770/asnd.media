
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"

import Carousel from "./Carousel"
import Projects from "./Projects"

export default function Home() {
    return (
        <>
        <Helmet>
            <title>ASND Media - Home</title>
        </Helmet>

        <div className="content home--content">
            <div className="home--contentHeader"><span className="home--span">ASND</span> Your Business to New Heights.</div>
            <div className="home--contentSubHeader">With a wide variety of media options, find something that's right for you.</div>
            <Link to="/packages"><button>Boost Packages</button></Link>
        </div>

        <Projects />

        {/* <Carousel /> */}
        </>
    )
}


