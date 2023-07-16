import ImageSlider from "../ImageSlider"
import "../Slideshow.css"

export default function Slideshow() {
    const slides = [
        { url: "assets/efird-leather.JPG", title: "Efird Leather" },
        { url: "assets/Spirited-Recreations.png", title: "Spirited Recreations" },
        { url: "assets/2-Crafty-Sisters.png", title: "2 Crafty Sisters" },
        { url: "assets/IMG_3330.png", title: "Money" },
    ];

    const containerStyles = {
        width: '80%',
        height: '1000px',
        margin: '0 auto',
    };
    
    return (
        <div className="slideshow">
            <div className="slideshow--slide">
                <ImageSlider slides={slides} />
            </div></div>
    )
}