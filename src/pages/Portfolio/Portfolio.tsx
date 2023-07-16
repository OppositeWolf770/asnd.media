import { Helmet } from "react-helmet"
import Slideshow from "./Slideshow"

export default function Portfolio() {
    return (
        <>
            <Helmet>
                <title>ASND Media - Portfolio</title>
            </Helmet>
            <div className="content portfolio--content">Some Examples of our Work</div>

            <div className="portfolio--header portfolio--header-left">Efird Leather</div>
            <Slideshow />
            <Slideshow />
        </>
    )
}