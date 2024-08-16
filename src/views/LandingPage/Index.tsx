import HeroSection from "@/pages/LandingPage/HeroSection.tsx"
import AdSection from "@/pages/LandingPage/AdSection.tsx";
import image from '@/assets/images/register/register-image.png'

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