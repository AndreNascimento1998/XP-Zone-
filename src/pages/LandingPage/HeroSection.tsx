import Logo from "@/assets/Icons/Logo/Logo.tsx"
import hero from "@/assets/images/landing-page/hero.png"
import heroDesktop from "@/assets/images/landing-page/hero-desktop.png"
import Button from "@/components/Button/Button.tsx"
import ButtonHamburguer from "@/components/Button/ButtonHamburguer.tsx"
import useHeroSection from "@/pages/LandingPage/hooks/useHeroSection.ts";
import Modal from "@/components/Modal/Modal.tsx";
import Login from "@/views/Login/Index.tsx";

const HeroSection = () => {
    const {
        items,
        openModal,
        handleItemClick,
        handleClick,
        handleCloseModal
    } = useHeroSection()

    return(
        <div className={'relative w-full'}>
            <img className={'w-full block md:hidden'} src={hero} alt={'Imagem de Ilustração'}/>
            <img className={'w-full hidden md:block'} src={heroDesktop} alt={'Imagem de Ilustração'}/>
            <div className={'absolute top-0 left-0 flex justify-between items-center py-4 px-8 xl:px-16 w-full'}>
                <div>
                    <Logo width={80} height={60}/>
                </div>
                <div className={'block lg:hidden'}>
                    <ButtonHamburguer items={items} onItemClick={handleItemClick} />
                </div>
                <div className={'hidden lg:block'}>
                    <Modal openModal={openModal} onClickClose={handleCloseModal} >
                        <div>
                            <Login />
                        </div>
                    </Modal>
                    <Button onClick={handleClick} outlined={true}>Entrar</Button>
                </div>
            </div>
            <div className={'absolute flex flex-col w-full text-center lg:text-start top-1/2 px-4 xl:px-16'}>
                <div className={'text-[28px] lg:text-[32px] font-oxanium'}>
                    <span
                        className="font-bold bg-btn-primary bg-clip-text text-transparent">&gt&gt</span>
                    <span className="text-white-light font-bold italic underline">Compre</span>
                </div>
                <span
                    className={'text-[28px] lg:text-[32px] font-bold italic font-oxanium bg-btn-primary bg-clip-text text-transparent'}>
                    os melhores artigos gamers da sua cidade
                </span>
                <div className={'py-5 text-[16px] lg:text-[18px]'}>
                    Nunca foi tão fácil conseguir aquele jogo ou console tão sonhado com a XP Zone.
                </div>
                <div>
                    COLOCAR ALGUMA COISA AQUI
                </div>
            </div>
        </div>
    )
}

export default HeroSection