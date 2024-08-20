import '@/components/Carousel/styles/Slider.scss'
import useSlider from "@/components/Carousel/hooks/useSlider.ts"

interface SliderProps {
    slides: string[]
}
const Slider = ({slides}: SliderProps) => {
    const {
        activeIndex,
        handleNavigationClick
    } = useSlider();


    return (
        <div className={' px-4 content relative'}>
            <section className="carousel" aria-label="Gallery">
                <ol className="carousel__viewport">
                    {slides.map((slide, index) => (
                        <li key={index} id={`carousel__slide${index + 1}`} className="carousel__slide">
                            <div className="carousel__snapper">
                                <img src={slide} className={''} alt={`Slide ${index + 1}`} />
                                <a href={`#carousel__slide${index === 0 ? slides.length : index}`} className="carousel__prev" />
                                <a href={`#carousel__slide${(index + 2) > slides.length ? 1 : (index + 2)}`} className="carousel__next" />
                            </div>
                        </li>
                    ))}
                </ol>
                <aside className="carousel__navigation">
                    <ol className="carousel__navigation-list">
                        {slides.map((_, index) => (
                            <li key={index} className="carousel__navigation-item">
                                <a
                                    href={`#carousel__slide${index + 1}`}
                                    className={`carousel__navigation-button ${index === activeIndex ? 'active' : ''}`}
                                    onClick={() => handleNavigationClick(index)}
                                />
                            </li>
                        ))}
                    </ol>
                </aside>
            </section>
        </div>
    );
}

export default Slider;