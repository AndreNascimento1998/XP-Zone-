import CardReword from '@/components/Card/CardReword'
import useCardHighlights from './hooks/useCardHighlights.ts'
import Game from '@/types/Game.ts'

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
    const { verifyFavorite, favoriteItemFunction, handleClick } = useCardHighlights()

    return (
        <div className={'flex flex-col gap-2'}>
            <div className={'px-4 text-[20px]'}>{title}</div>
            <div className={'flex lg:px-4 flex-grow lg:flex-wrap gap-4 overflow-x-auto lg:overflow-x-hidden'}>
                {games.map((game: Game, gameIndex: number) => (
                    <div key={gameIndex}>
                        <div className={'relative w-[245px] min-w-[90%] padding-left padding-right cursor-pointer'}>
                            <CardReword
                                isFavorite={verifyFavorite(game.id)}
                                onClick={handleClick}
                                onClickFavorite={favoriteItemFunction}
                                game={game}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardHighlights
