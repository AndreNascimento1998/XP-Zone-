import Slider from "@/components/Carousel/Slider.tsx"
import useHome from "@/pages/Home/hooks/useHome.ts"

const HeroSection = () => {
    const {
        responsiveSlides,
        responsiveCarousel
    } = useHome()

    return (
        <div className={'flex flex-col gap-20'}>
            <div className={'px-4'}>
                <Slider
                    slides={responsiveSlides}
                    slidesPerView={1}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true
                    }}
                />
            </div>
            <div>
                <div className={'px-4 text-[20px]'}>Filtre seu console</div>
                <Slider
                    slides={responsiveCarousel}
                />
            </div>
        </div>
    )
}

export default HeroSection