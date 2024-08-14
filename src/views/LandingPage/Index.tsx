import HeroSection from "@/pages/LandingPage/HeroSection.tsx";
import {useState} from "react";

const LadingPage = () => {
    return (
        <div className={'bg-secondary text-white-light'}>
            <div className={'flex flex-col gap-10'}>
                <HeroSection />
                <div>
                    oii
                </div>
            </div>
        </div>
    );
}

export default LadingPage;