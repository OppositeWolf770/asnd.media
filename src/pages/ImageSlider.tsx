import { useState, CSSProperties } from "react"

type Slide = {
    url: string;
}

type ImageSliderProps ={
    slides: Slide[];
}

const ImageSlider = ({ slides }: ImageSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles: CSSProperties = {
        height: '100%',
        position: 'relative',
    }

    const slideStyles: CSSProperties = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`,
    }

    const leftArrowStyles: CSSProperties = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        padding: '0 15px',
        paddingBottom: '5px',
        borderRadius: '25px',
        left: '32px',
        fontSize: 'calc(10px + 3vw)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
    }

    const rightArrowStyles: CSSProperties = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        padding: '0 15px',
        paddingBottom: '5px',
        borderRadius: '25px',
        right: '32px',
        fontSize: 'calc(10px + 3vw)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }


    if (slides.length == 1) {
        return (
            <div style={sliderStyles}>
                <div style={slideStyles}></div>
            </div>
        )
    }

    return (
        <div style={sliderStyles}>
            <div className="arrow leftArrow" onClick={goToPrevious}>←</div>
            <div className="arrow rightArrow" onClick={goToNext}>→</div>
            <div style={slideStyles}></div>
        </div>
    )
}

export default ImageSlider;