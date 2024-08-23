import HeroSection from '@/pages/LandingPage/components/HeroSection.tsx'
import AdSection from '@/pages/LandingPage/components/AdSection.tsx'
import Marquee from '@/pages/LandingPage/components/Marquee.tsx'
import GiftCard from './components/GiftCard.tsx'

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
