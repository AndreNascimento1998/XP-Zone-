import HeroSection from '@/pages/Home/components/HeroSection'
import CardDetails from '@/pages/Home/components/CardDetails'
import useHome from './hooks/useHome'
import CardHighlights from '@/pages/Home/components/CardHighlights'
import SectionBanner from '@/pages/Home/components/SectionBanner'

const Home = () => {
    const { users, gamesHighlight, gamesXbox, gamesPs, gamesNintendo } = useHome()
    return (
        <div className={'flex flex-col gap-20'}>
            <HeroSection />
            <CardDetails users={users} />
            {gamesHighlight ? <CardHighlights title={'Jogos em destaque'} games={gamesHighlight} /> : null}
            {gamesXbox ? <CardHighlights title={'Jogos do Xbox'} games={gamesXbox} /> : null}
            {gamesPs.length ? <CardHighlights title={'Jogos do Playstation'} games={gamesPs} /> : null}
            {gamesNintendo.length ? <CardHighlights title={'Jogos do Nintendo'} games={gamesNintendo} /> : null}
            <SectionBanner />
        </div>
    )
}

export default Home
