import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import '@/components/Carousel/styles/Slider.scss';
import useSlider from "./hooks/useSlider.ts";

interface SliderProps {
    slides: string[],
    slidesPerView?: number,
    spaceBetween?: number,
    autoplay?: { delay: number, disableOnInteraction: boolean } | boolean,
    pagination?: { clickable: boolean, dynamicBullets: boolean } | boolean,
    dynamicBullets?: boolean
}

const Slider = ({
                    slides,
                    slidesPerView = 4,
                    spaceBetween = 30,
                    pagination = false,
                    autoplay = false
                }: SliderProps) => {
    const { sliderPerViewResponsive } = useSlider(slidesPerView)

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
                    <SwiperSlide key={index}>
                        <img src={slide} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Slider;