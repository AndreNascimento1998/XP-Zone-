import HeroSection from '@/pages/LandingPage/components/HeroSection'
import AdSection from '@/pages/LandingPage/components/AdSection'
import Marquee from '@/pages/LandingPage/components/Marquee'
import GiftCard from './components/GiftCard'

const LadingPage = () => {
    return (
        <div className={'bg-secondary text-white-light'}>
            <div className={'flex flex-col gap-20 lg:gap-2'}>
                <HeroSection />
                <AdSection />
                <Marquee />
                <GiftCard />
            </div>
        </div>
    )
}

export default LadingPage
