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

const useHeroSection = () => {
    const slides = [
        { value: '', image: banner1 },
        { value: '', image: banner2 },
        { value: '', image: banner3 },
    ]
    const slidesMobile = [
        { value: '', image: banner1Mobile },
        { value: '', image: banner2Mobile },
        { value: '', image: banner3Mobile },
    ]
    const carousel = [
        { value: 'assassin', image: carousel1 },
        { value: 'halo', image: carousel2 },
        { value: 'spider', image: carousel3 },
        { value: 'mario', image: carousel4 },
        { value: 'assassinsCred', image: carousel1 },
        { value: 'haloInfity', image: carousel2 },
        { value: 'spiderMan', image: carousel3 },
        { value: 'marioOdyssey', image: carousel4 },
    ]
    const [responsiveSlides, setResponsiveSlides] = useState(slides)
    const [responsiveCarousel] = useState(carousel)

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
        responsiveCarousel,
    }
}

export default useHeroSection
