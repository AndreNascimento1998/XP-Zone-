import Slider from "@/components/Carousel/Slider.tsx"
import useHome from "@/pages/Home/hooks/useHome.ts"

const HeroSection = () => {
    const { slides } = useHome()

    return (
        <div>
            <Slider slides={slides} />
        </div>
    )
}

export default HeroSection