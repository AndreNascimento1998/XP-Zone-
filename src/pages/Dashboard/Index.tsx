import CardProgress from '@/pages/Dashboard/components/CardProgress.tsx'
import LibraryFavorite from './components/LibraryFavorite.tsx'
import MainPagesLayout from '@/layouts/MainPagesLayout.tsx'

const Dashboard = () => {
    return (
        <div>
            <MainPagesLayout>
                <div className={'flex flex-col gap-4 lg:flex-row'}>
                    <CardProgress />
                    <LibraryFavorite />
                </div>
            </MainPagesLayout>
        </div>
    )
}

export default Dashboard
