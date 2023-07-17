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
            <Slideshow slides={[
                { url: "assets/efird-leather.JPG"}
            ]} />

            <div className="portfolio--header portfolio--header-right">Spirited Recreations</div>
            <Slideshow slides={[
                { url: "assets/Spirited-Recreations.jpg"}
            ]} />

            <div className="portfolio--header portfolio--header-left">2 Crafty Sisters</div>
            <Slideshow slides={[
                { url: "assets/2-Crafty-Sisters.jpg"}
            ]} />

            <div className="portfolio--header portfolio--header-right">Red Barn</div>
            <Slideshow slides={[
                { url: "assets/red-barn.jpg"}
            ]} />

            <div className="portfolio--header portfolio--header-left">Bee Placeholder</div>
            <Slideshow slides={[
                { url: "assets/bee_assets/bees.jpg"},
                { url: "assets/bee_assets/bees_2.jpg"},
                { url: "assets/bee_assets/bees_honey.jpg"},
                { url: "assets/bee_assets/bee_gabe.jpg"},
                { url: "assets/bee_assets/bee_jake.jpg"},
            ]} />


        </>
    )
}