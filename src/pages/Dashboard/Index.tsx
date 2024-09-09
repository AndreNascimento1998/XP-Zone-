import banner from '@/assets/images/dashboard/banner.png'
import bannerDesktop from '@/assets/images/dashboard/banner-desktop.png'
import CardRules from '@/components/Card/CardRules.tsx'
import CardProgress from '@/pages/Dashboard/components/CardProgress.tsx'
import CardProfile from '@/components/Card/CardProfile.tsx'
import useDashboard from '@/pages/Dashboard/hooks/useDashboard.ts'
import LibraryFavorite from './components/LibraryFavorite.tsx'

const Dashboard = () => {
    const { description, user, handleClick } = useDashboard()

    return (
        <div className={'mb-20'}>
            <img className={'block md:hidden absolute top-0'} src={banner} alt={'sack boy'} />
            <img className={'hidden md:block absolute top-0 w-full'} src={bannerDesktop} alt={'sack boy'} />
            <div className={'relative flex flex-col gap-4 pt-[26rem] px-4'}>
                <div className={'flex flex-col gap-4 lg:flex-row'}>
                    <CardProfile user={user} />
                    <CardRules
                        onClick={handleClick}
                        title={'Regras da estante'}
                        buttonText={'Anúnciar grátis'}
                        description={description}
                    />
                </div>
                <div className={'flex flex-col gap-4 lg:flex-row'}>
                    <CardProgress />
                    <LibraryFavorite />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
