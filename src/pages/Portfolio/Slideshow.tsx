import ImageSlider from "./ImageSlider"
import "../Slideshow.css"

type Slide = {
    url: string
}

type SlideshowProps = {
    slides: Slide[]
}


export default function Slideshow({slides}: SlideshowProps) {
    return (
        <div className="slideshow">
            <div className="slideshow--slide">
                <ImageSlider slides={slides} />
            </div></div>
    )
}