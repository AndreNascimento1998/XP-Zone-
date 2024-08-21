import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import '@/components/Carousel/styles/Slider.scss';
import useSlider from "./hooks/useSlider.ts";

interface Slide {
    value: string;
    image: string;
}

interface SliderProps {
    slides: Slide[]
    slidesPerView?: number
    spaceBetween?: number
    autoplay?: { delay: number, disableOnInteraction: boolean } | boolean
    pagination?: { clickable: boolean, dynamicBullets: boolean } | boolean
    dynamicBullets?: boolean
    onClick?: (slide: Slide) => void
}

const Slider = ({
                    slides,
                    slidesPerView = 4,
                    spaceBetween = 30,
                    pagination = false,
                    autoplay = false,
                    onClick
                }: SliderProps) => {
    const { sliderPerViewResponsive, handleClick } = useSlider(slidesPerView, onClick)

    return (
        <div className={!autoplay ? 'margim-left' : ''}>
            <Swiper
                slidesPerView={sliderPerViewResponsive}
                spaceBetween={spaceBetween}
                pagination={pagination}
                autoplay={autoplay}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide  key={index}>
                        <img onClick={() => handleClick(slide)} className={!autoplay ? 'cursor-pointer' : ''} src={slide.image} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slider;