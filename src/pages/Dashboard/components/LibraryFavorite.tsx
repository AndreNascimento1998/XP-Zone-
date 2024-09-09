import Card from '@/components/Card/Card.tsx'
import { useContext } from 'react'
import UsersContext from '@/context/UsersContext/UsersContext.ts'
import useImages from '@/hooks/useImages.ts'

const LibraryFavorite = () => {
    const { favoriteItem, getAllGames } = useContext(UsersContext)
    const { images } = useImages()
    const games = getAllGames().filter((game) => favoriteItem.includes(game.id.toString()))

    return (
        <div>
            <Card>
                <div className={'flex flex-col max-h-[440px] overflow-y-auto overflow-x-hidden p-1 gap-4 font-oxanium'}>
                    <span className={'uppercase font-bold bg-btn-primary bg-clip-text text-transparent'}>
                        Favoritos
                    </span>
                    {games.length ? (
                        games.map((game) => (
                            <div
                                key={game.id}
                                className={
                                    'flex w-[300px] justify-between items-center hover:text-[#FF9A51] py-4 px-2 border-[2px] hover:border-[#E54B65] rounded-[5px]'
                                }
                            >
                                <div className={'flex gap-1'}>
                                    <div className={''}>{game.name}</div>
                                </div>
                                <div>
                                    <img
                                        src={images[game.src]}
                                        alt={game.name}
                                        className={'w-[50px] h-[50px] rounded-full object-cover'}
                                    />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={'text-center'}>Não há jogos favoritos no momento</div>
                    )}
                </div>
            </Card>
        </div>
    )
}

export default LibraryFavorite
