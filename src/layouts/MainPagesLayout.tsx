import banner from '@/assets/images/dashboard/banner.png'
import bannerDesktop from '@/assets/images/dashboard/banner-desktop.png'
import CardRules from '@/components/Card/CardRules.tsx'
import CardProfile from '@/components/Card/CardProfile.tsx'
import useDashboard from '@/pages/Dashboard/hooks/useDashboard.ts'
import Footer from "@/pages/Footer/Index.tsx";

const Dashboard = ({children}) => {
    const { description, user, handleClick } = useDashboard()

    return (
        <div>
            <img className={'block md:hidden absolute top-0'} src={banner} alt={'sack boy'} />
            <img className={'hidden md:block absolute top-0 w-full'} src={bannerDesktop} alt={'sack boy'} />
            <div className={'relative mb-10 flex flex-col gap-4 pt-[96%] md:pt-[26%] xl:pt-[32%] px-4'}>
                <div className={'flex flex-col gap-4 lg:flex-row'}>
                    <CardProfile user={user} />
                    <CardRules
                        onClick={handleClick}
                        title={'Regras da estante'}
                        buttonText={'Anúnciar grátis'}
                        description={description}
                    />
                </div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard
