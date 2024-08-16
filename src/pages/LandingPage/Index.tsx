import HeroSection from "@/pages/LandingPage/components/HeroSection.tsx"
import AdSection from "@/pages/LandingPage/components/AdSection.tsx"

const LadingPage = () => {
    return (
        <div className={'bg-secondary text-white-light'}>
            <div className={'flex flex-col gap-20 lg:gap-2'}>
                <HeroSection/>
                <AdSection/>
                {/*<img className={'object-cover w-full h-full'} src={image} alt={'imagem'} />*/}

            </div>
        </div>
    );
}

export default LadingPage;