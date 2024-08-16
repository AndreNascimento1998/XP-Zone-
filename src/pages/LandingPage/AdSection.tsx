import kratos from '@/assets/images/landing-page/Kratos-mobile.png'
import kratosDesktop from '@/assets/images/landing-page/Kratos-desktop.png'
import ad from '@/assets/images/landing-page/ad.png'
import CheckIcon from "@/assets/Icons/Others/CheckIcon.tsx"
import Button from "@/components/Button/Button.tsx"
import spiderMan from '@/assets/images/landing-page/spider-man.png'
import image from '@/assets/images/register/register-image.png'

const AdSection = () => {
    return (
        <div className={'relative pb-0 xl:pb-[50%] 2xl:pb-[63%]'}>
            <div className={'hidden xl:block w-full static  xl:absolute top-[40rem]'}>
                <img className={'object-cover  w-full '} src={image} alt={'imagem'}/>
            </div>
            <img className={'relative w-full block xl:hidden'} src={kratos} alt={'Kratos'}/>
            <img className={'w-[800px] hidden xl:block'} src={kratosDesktop} alt={'Kratos'}/>

            <div className={'relative xl:absolute xl:top-[18rem] xl:pl-40 xl:w-full'}>
                <div
                    className={' flex flex-col absolute bottom-[12rem] xl:static text-center xl:text-start xl:items-end w-full'}>
                    <div
                        className={'font-oxanium font-bold bg-btn-primary bg-clip-text xl:w-1/2 text-transparent text-[32px]'}>Conheça
                        a XP Zone
                    </div>
                </div>
                <div className={'px-8 xl:px-16 block xl:flex xl:flex-col xl:items-end xl:absolute xl:top-20'}>
                    <div className={'block xl:flex xl:flex-col gap-6 w-full xl:w-1/2'}>
                            <span>
                                Aqui você encontra jogadores da sua cidade em uma comunidade segura para você trocar,
                                comprar ou vender seus artigos gamers, além disso, você terá a
                                possibilidade de se conectar com amigos e montar a sua própria comunidade.
                            </span>
                        <div className={'hidden xl:flex xl:flex-col xl:gap-6'}>
                            <div className={'flex flex-col gap-4'}>
                                <div className={'flex gap-2'}>
                                    <CheckIcon/> <span>Compre jogos novos e usados;</span>
                                </div>
                                <div className={'flex gap-2'}>
                                    <CheckIcon/> <span>Troque seus jogos por outros;</span>
                                </div>
                                <div className={'flex gap-2'}>
                                    <CheckIcon/> <span>Venda seus artigos gamers;</span>
                                </div>
                                <div className={'flex gap-2'}>
                                    <CheckIcon/> <span>Ganhe XP a cada interação.</span>
                                </div>
                            </div>
                            <div className={'flex w-1/2'}>
                                <Button>Anúnciar</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className={'relative block xl:hidden'}>
                <img className={'w-full block xl:hidden absolute top-0 left-0'} src={ad} alt={'image'}/>
                <div className={'relative'}>
                    <div className={'absolute top-5 w-full flex flex-col gap-6 items-center'}>
                        <div className={'flex flex-col gap-4'}>
                            <div className={'flex gap-2'}>
                                <CheckIcon/> <span>Compre jogos novos e usados;</span>
                            </div>
                            <div className={'flex gap-2'}>
                                <CheckIcon/> <span>Troque seus jogos por outros;</span>
                            </div>
                            <div className={'flex gap-2'}>
                                <CheckIcon/> <span>Venda seus artigos gamers;</span>
                            </div>
                            <div className={'flex gap-2'}>
                                <CheckIcon/> <span>Ganhe XP a cada interação.</span>
                            </div>
                        </div>
                        <div className={'w-full px-8 xl:px-16'}>
                            <Button>Anúnciar</Button>
                        </div>
                    </div>
                    <div className={'relative xl:hidden'}>
                        <img className={'w-full block pt-[18rem] xl:hidden'} src={spiderMan} alt={'Spider Man'}/>
                        <div className={'flex flex-col gap-6 px-6'}>
                            <div
                                className={'font-oxanium font-bold bg-btn-primary text-center bg-clip-text xl:w-1/2 text-transparent text-[32px]'}>
                                Ganhe XP e cresça na comunidade
                            </div>
                            <div>
                                A cada troca, compra ou venda, você acumula XP e com eles você é rankeado na sua
                                cidade tornando-se um membro mais confiável para toda a comunidade e recebendo
                                benefícios exclusivos.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdSection