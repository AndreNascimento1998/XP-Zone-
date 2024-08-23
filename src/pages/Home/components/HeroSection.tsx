import Slider from '@/components/Carousel/Slider.tsx'
import useHeroSection from '@/pages/Home/components/hooks/useHeroSection.ts'

const HeroSection = () => {
    const { responsiveSlides, responsiveCarousel } = useHeroSection()

    return (
        <div className={'flex text-[20px] flex-col gap-20'}>
            <div className={'px-4'}>
                <Slider
                    slides={responsiveSlides}
                    slidesPerView={1}
                    spaceBetween={0}
                    navigation={false}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}
                />
            </div>
            <div className={'flex flex-col gap-2'}>
                <div className={'px-4'}>Filtre seu console</div>
                <div className={'px-2 lg:px-0'}>
                    <Slider onClick={(slide) => console.log(slide)} slides={responsiveCarousel} />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
