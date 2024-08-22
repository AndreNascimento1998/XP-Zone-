import HeroSection from "@/pages/Home/components/HeroSection.tsx";
import CardDetails from "@/pages/Home/components/CardDetails.tsx";
import useHome from "./hooks/useHome.ts";
import CardHighlights from "@/pages/Home/components/CardHighlights.tsx";
import useUserContext from "@/context/UserContext/useUserContext.ts"

const Home = () => {
    const { user } = useUserContext()
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