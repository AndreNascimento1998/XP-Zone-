import HeroSection from "@/pages/Home/components/HeroSection.tsx"
import CardDetails from "@/pages/Home/components/CardDetails.tsx"
import useHome from "./hooks/useHome.ts"
import CardHighlights from "@/pages/Home/components/CardHighlights.tsx"

const Home = () => {
    const {
        usersMock,
        gamesHighlight,
        gamesXbox,
        gamesPs,
        gamesNintendo
    } = useHome()
    return (
        <div className={'flex flex-col gap-20'}>
            <HeroSection />
            <CardDetails users={usersMock} />
            <CardHighlights title={'Jogos em destaque'} games={gamesHighlight} />
            <CardHighlights title={'Jogos do Xbox'} games={gamesXbox} />
            <CardHighlights title={'Jogos do Playstation'} games={gamesPs} />
            <CardHighlights title={'Jogos do Nintendo'} games={gamesNintendo} />
        </div>
    )
}

export default Home