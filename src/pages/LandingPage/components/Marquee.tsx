import '@/pages/LandingPage/components/styles/Platforms.scss'
import useMarquee from "@/pages/LandingPage/components/hooks/useMarquee.ts";

const Marquee = () => {
    const { marqueeData } = useMarquee()

    return (
        <div className="marquee">
            <div className="marquee_track">
                <div className="flex gap-4 h-[50px] xl:h-full">
                    {marqueeData && marqueeData.map(((item, index) => (
                        <img src={item} alt={'Plataforma'} key={index}/>
                    )))}
                </div>
            </div>
        </div>
    )
}

export default Marquee