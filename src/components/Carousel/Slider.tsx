import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import '@/components/Carousel/styles/Slider.scss'
import useSlider from '@/components/Carousel/hooks/useSlider'

interface Slide {
    value: string
    image: string
}

interface SliderProps {
    slides: Slide[]
    slidesPerView?: number
    spaceBetween?: number
    autoplay?: { delay: number; disableOnInteraction: boolean } | boolean
    pagination?: { clickable: boolean; dynamicBullets: boolean } | boolean
    dynamicBullets?: boolean
    navigation?: boolean
    onClick?: (slide: Slide) => void
    loop?: boolean
}

const Slider = ({
    slides,
    slidesPerView = 4,
    spaceBetween = 10,
    pagination = false,
    autoplay = false,
    loop = false,
    navigation = true,
    onClick,
}: SliderProps) => {
    const { sliderPerViewResponsive, handleClick } = useSlider(slidesPerView, onClick)

    return (
        <div className={!autoplay ? 'margim-left' : ''}>
            <Swiper
                slidesPerView={sliderPerViewResponsive}
                spaceBetween={spaceBetween}
                pagination={pagination}
                autoplay={autoplay}
                loop={loop}
                navigation={navigation}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <img
                            onClick={onClick ? () => handleClick(slide) : null}
                            className={!autoplay ? 'cursor-pointer' : ''}
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider
