import { useEffect, useState } from 'react'

interface Slide {
    value: string
    image: string
}
const useSlider = (slidesPerView: number, onClick: (slide: Slide) => void) => {
    const [sliderPerViewResponsive, setSliderPerViewResponsive] = useState(slidesPerView)

    const handleClick = (slide: Slide) => {
        onClick(slide)
    }

    const handleResize = () => {
        if (window.innerWidth < 640 && slidesPerView !== 1) {
            setSliderPerViewResponsive(1.5)
        } else {
            setSliderPerViewResponsive(slidesPerView)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return {
        sliderPerViewResponsive,
        handleClick,
    }
}

export default useSlider
