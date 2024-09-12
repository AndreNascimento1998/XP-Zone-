import banner from '@/assets/images/dashboard/banner.png'
import bannerDesktop from '@/assets/images/dashboard/banner-desktop.png'
import CardRules from '@/components/Card/CardRules.tsx'
import CardProfile from '@/components/Card/CardProfile.tsx'
import useMainPagesLayout from '@/layouts/hooks/useMainPagesLayout.ts'
import Footer from "@/pages/Footer/Index.tsx";
import {Link} from "react-router-dom";
import './styles/MainPagesLayout.scss'

const Dashboard = ({children}) => {
    const {
        description,
        user,
        routeName,
        handleClick,
        itemsTabs
    } = useMainPagesLayout()

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
                <div className={'hidden xl:flex gap-40 mb-4 font-oxanium font-bold text-[20px]'}>
                    {
                        itemsTabs.map((item, index) => (
                            <Link
                                key={index}
                                to={`/${item.nameRoute}`}
                            >
                                <div
                                    className={`cursor-pointer relative
                                    ${routeName === item.nameRoute ? ' bg-btn-primary bg-clip-text text-transparent' : ''} `}
                                >
                                    {item.name}
                                    <div  className={`absolute ${routeName === item.nameRoute ? 'border-animation w-[100%] border-[4px] rounded-[10px]' : 'hidden' }`} />
                                </div>
                            </Link>
                        ))
                    }
                </div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard
