import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination} from 'swiper/modules';
import '@/components/Carousel/styles/Slider.scss'

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

    return (
        <div>
            <Swiper
                slidesPerView={slidesPerView}
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