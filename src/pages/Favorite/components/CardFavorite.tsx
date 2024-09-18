import useCardFavorites from './hooks/useCardFavorites.ts'
import CardReword from '@/components/Card/CardReword.tsx'

const CardFavorite = () => {
    const { gamesFavorite, favoriteItemFunction, verifyFavorite } = useCardFavorites()

    return (
        <div>
            {gamesFavorite.length === 0 ? (
                <div className={'text-center bg-btn-primary font-bold italic rounded-[10px] p-1'}>
                    Nenhum jogo favoritado
                </div>
            ) : (
                <div className={'flex flex-wrap justify-around w-full'}>
                    {gamesFavorite.length &&
                        gamesFavorite.map((game) => (
                            <div className={'relative'} key={game.id}>
                                <CardReword
                                    onClick={(game) => console.log(game)}
                                    onClickFavorite={favoriteItemFunction}
                                    isFavoriteStyle={verifyFavorite(game.id)}
                                    isFavorite={true}
                                    game={game}
                                />
                            </div>
                        ))}
                </div>
            )}
        </div>
    )
}
export default CardFavorite
