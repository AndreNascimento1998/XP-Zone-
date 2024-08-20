import {useEffect, useState} from "react"

const useSlider = (slidesPerView: number) => {
    const [sliderPerViewResponsive, setSliderPerViewResponsive] = useState(slidesPerView)

    const handleResize = () => {
        if(window.innerWidth < 640 && slidesPerView !== 1) {
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
    }, []);

    return {
        sliderPerViewResponsive
    }
}

export default useSlider