import HeroSection from "@/pages/Home/components/HeroSection.tsx";
import CardDetails from "@/pages/Home/components/CardDetails.tsx";
import useHome from "./hooks/useHome.ts";
import CardHighlights from "@/pages/Home/components/CardHighlights.tsx";

const Home = () => {
    const { users } = useHome()

    return (
        <div className={'flex flex-col gap-20'}>
            <HeroSection />
            <CardDetails users={users} />
            <CardHighlights />
        </div>
    )
}

export default Home