import CardReword from '@/components/Card/CardReword'
import Game from '@/types/Game'

interface CardHighlightsProps {
    title: string
    games: {
        name: string
        platform: string
        src: string
        highlight: boolean
    }[]
}

const CardHighlights = ({ title, games }: CardHighlightsProps) => {
    const handleClick = (game: Game) => {
        console.log(game)
    }

    return (
        <div className={'flex flex-col gap-2'}>
            <div className={'px-4 text-[20px]'}>{title}</div>
            <div className={'flex lg:px-4 flex-grow lg:flex-wrap gap-4 overflow-x-auto lg:overflow-x-hidden'}>
                {games.map((game, gameIndex) => (
                    <div key={gameIndex}>
                        <div className={'w-[245px] min-w-[90%] padding-left padding-right cursor-pointer'}>
                            <CardReword onClick={handleClick} game={game} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardHighlights
