import Game from '@/types/Game'
import usePlatformEnum from '@/hooks/usePlatformEnum'
import HeartIcon from '@/assets/Icons/Others/HeartIcon.tsx'
import useImages from '@/hooks/useImages.ts'

interface CardRewordProps {
    game: Game
    onClick?: (game: Game) => void
    onClickFavorite?: (game: Game) => void
    isFavoriteStyle?: boolean
    isFavorite?: boolean
}

const CardReword = ({ game, isFavoriteStyle, onClick, onClickFavorite, isFavorite }: CardRewordProps) => {
    const { platformName } = usePlatformEnum()
    const { images } = useImages()

    const handleClick = (game: Game) => {
        onClick(game)
    }

    const favoriteItem = (game: Game) => {
        onClickFavorite(game)
    }

    return (
        <div
            className={`min-w-0 bg-card border-[3px] border-[#E54B65] rounded-[16px]
            transition-all cursor-pointer`}
        >
            {
                isFavorite &&
                <div
                    onClick={() => favoriteItem(game)}
                    className={`
                    absolute hover:border-white right-2 hover:scale-[1.2] top-2 p-3 rounded-full border-[2px]
                        ${isFavoriteStyle ? 'bg-[#E54B65] border-[#280A57]' : 'border-[#E54B65] bg-card-light'}
                    `}
                >
                    <HeartIcon favoriteColor={isFavoriteStyle} />
                </div>
            }

            <div onClick={() => handleClick(game)}>
                <div>
                    <img src={images[game?.src]} alt={game?.name} className={'w-full'} />
                </div>
                <div className={'flex flex-col p-2 gap-2'}>
                    <div
                        className={
                            'flex items-center justify-between gap-2 font-oxanium font-bold bg-btn-primary bg-clip-text text-transparent'
                        }
                    >
                        <div>{game?.name}</div>
                    </div>
                    {game?.platform && (
                        <div className={'font-bold justify-between'}>
                            <span>{platformName[game?.platform]}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardReword
