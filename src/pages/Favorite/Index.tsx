import MainPagesLayout from '@/layouts/MainPagesLayout.tsx'
import CardFavorite from './components/CardFavorite.tsx'

const Favorite = () => {
    return (
        <div>
            <MainPagesLayout>
                <div className={'flex flex-col gap-4'}>
                    <div className={'text-[20px]'}>Jogos favoritados</div>
                    <CardFavorite />
                </div>
            </MainPagesLayout>
        </div>
    )
}

export default Favorite
