import banner1 from '@/assets/images/carousel/banner1.png'
import banner2 from '@/assets/images/carousel/banner2.png'
import banner3 from '@/assets/images/carousel/banner3.png'
import banner1Mobile from '@/assets/images/carousel/banner1-mobile.png'
import banner2Mobile from '@/assets/images/carousel/banner2-mobile.png'
import banner3Mobile from '@/assets/images/carousel/banner3-mobile.png'
import carousel1 from '@/assets/images/carousel/carousel1.png'
import carousel2 from '@/assets/images/carousel/carousel2.png'
import carousel3 from '@/assets/images/carousel/carousel3.png'
import carousel4 from '@/assets/images/carousel/carousel4.png'
import { useEffect, useState } from 'react'

const useHome = () => {
    const slides = [banner1, banner2, banner3]
    const slidesMobile = [banner1Mobile, banner2Mobile, banner3Mobile]
    const carousel = [carousel1, carousel2, carousel3, carousel4, carousel1, carousel2, carousel3, carousel4, ]
    const [responsiveSlides, setResponsiveSlides] = useState(slides)
    const [responsiveCarousel, setResponsiveCarousel] = useState(carousel)

    const handleResize = () => {
        if (window.innerWidth > 640) {
            setResponsiveSlides(slides)
        } else {
            setResponsiveSlides(slidesMobile)
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
        responsiveSlides,
        responsiveCarousel
    }
}

export default useHome