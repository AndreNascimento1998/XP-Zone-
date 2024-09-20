import kratos from '@/assets/images/landing-page/Kratos-mobile.png'
import kratosDesktop from '@/assets/images/landing-page/Kratos-desktop.png'
import ad from '@/assets/images/landing-page/ad.png'
import CheckIcon from '@/assets/Icons/Others/CheckIcon'
import Button from '@/components/Button/Button'
import spiderMan from '@/assets/images/landing-page/spider-man.png'
import image from '@/assets/images/register/register-image.png'
import spiderManDesktop from '@/assets/images/landing-page/spider-man-desktop.png'
import fireGif from '@/assets/fire.gif'
import Card from '@/components/Card/Card'
import BarsProgress from '@/components/Bars/BarsProgress'
import { Link } from 'react-router-dom'

const AdSection = () => {
    return (
        <div className={'relative pb-1 xl:pb-[50%] 2xl:pb-[53%] 3xl:pb-[57%] 4xl:pb-[60%] 5xl:pb-[62%]'}>
            <div className={'hidden xl:block w-full static  xl:absolute top-[40rem]'}>
                <img className={'object-cover  w-full '} src={image} alt={'imagem'} />
            </div>
            <img className={'relative w-full block xl:hidden'} src={kratos} alt={'Kratos'} />
            <img className={'w-[800px] hidden xl:block'} src={kratosDesktop} alt={'Kratos'} />
            <div className={'hidden xl:flex relative w-full'}>
                <div
                    className={
                        '' +
                        'absolute flex pl-16 gap-6 flex-col justify-center items-center w-1/2 xl:top-[10rem] ' +
                        '2xl:top-[20rem] 3xl:top-[40rem] 4xl:top-[50rem] 5xl:top-[70rem]'
                    }
                >
                    <div
                        className={
                            'font-oxanium font-bold bg-btn-primary text-center bg-clip-text w-1/2 text-transparent  text-[32px]'
                        }
                    >
                        Ganhe XP e cresça na comunidade
                    </div>
                    <div>
                        A cada troca, compra ou venda, você acumula XP e com eles você é rankeado na sua cidade
                        tornando-se um membro mais confiável para toda a comunidade e recebendo benefícios exclusivos.
                    </div>
                    <div className={'w-full'}>
                        <Card>
                            <div className={'flex flex-col gap-4 items-center'}>
                                <div className={'font-oxanium font-bold text-center text-[28px]'}>
                                    <span className={'text-transparent bg-btn-primary bg-clip-text'}>Você ganhou</span>
                                    <span> 100 XP</span>
                                </div>
                                <BarsProgress percentage={80}>
                                    <div className={'w-[60px]'}>
                                        <img alt={'Fire Icon'} src={fireGif} />
                                    </div>
                                </BarsProgress>
                                <div className={'text-[18px]'}>Acumule XP e ganhe recompensa</div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <img
                className={'hidden xl:block absolute right-0 2xl:bottom-20 w-1/2 '}
                src={spiderManDesktop}
                alt={'Spider Man'}
            />
            <div className={'relative xl:absolute xl:top-[18rem] xl:pl-40 xl:w-full'}>
                <div
                    className={
                        ' flex xl:hidden flex-col absolute bottom-[12rem] xl:static text-center xl:text-start xl:items-end w-full'
                    }
                >
                    <div
                        className={
                            'font-oxanium font-bold bg-btn-primary bg-clip-text xl:w-1/2 text-transparent text-[32px]'
                        }
                    >
                        Conheça a XP Zone
                    </div>
                </div>
                <div className={'px-8 xl:px-16 block xl:flex xl:flex-col xl:items-end xl:absolute xl:top-20'}>
                    <div className={'block xl:flex xl:flex-col gap-6 w-full xl:w-1/2'}>
                        <div
                            className={
                                'hidden xl:block font-oxanium font-bold bg-btn-primary bg-clip-text xl:w-1/2 text-transparent text-[32px]'
                            }
                        >
                            Conheça a XP Zone
                        </div>
                        <span>
                            Aqui você encontra jogadores da sua cidade em uma comunidade segura para você trocar,
                            comprar ou vender seus artigos gamers, além disso, você terá a possibilidade de se conectar
                            com amigos e montar a sua própria comunidade.
                        </span>
                        <div className={'hidden xl:flex xl:flex-col xl:gap-6'}>
                            <div className={'flex flex-col gap-4'}>
                                <div className={'flex gap-2'}>
                                    <CheckIcon /> <span>Compre jogos novos e usados;</span>
                                </div>
                                <div className={'flex gap-2'}>
                                    <CheckIcon /> <span>Troque seus jogos por outros;</span>
                                </div>
                                <div className={'flex gap-2'}>
                                    <CheckIcon /> <span>Venda seus artigos gamers;</span>
                                </div>
                                <div className={'flex gap-2'}>
                                    <CheckIcon /> <span>Ganhe XP a cada interação.</span>
                                </div>
                            </div>
                            <div className={'flex w-1/2'}>
                                <Link className={'w-full'} to={'/register-user'}>
                                    <Button>Anúnciar</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <div className={'relative block xl:hidden'}>
                <img className={'w-full block xl:hidden absolute top-0 left-0'} src={ad} alt={'image'} />
                <div className={'relative'}>
                    <div className={'absolute top-5 w-full flex flex-col gap-6 items-center'}>
                        <div className={'flex flex-col gap-4'}>
                            <div className={'flex gap-2'}>
                                <CheckIcon /> <span>Compre jogos novos e usados;</span>
                            </div>
                            <div className={'flex gap-2'}>
                                <CheckIcon /> <span>Troque seus jogos por outros;</span>
                            </div>
                            <div className={'flex gap-2'}>
                                <CheckIcon /> <span>Venda seus artigos gamers;</span>
                            </div>
                            <div className={'flex gap-2'}>
                                <CheckIcon /> <span>Ganhe XP a cada interação.</span>
                            </div>
                        </div>
                        <div className={'w-full px-8 xl:px-16'}>
                            <Link className={'w-full'} to={'/register-user'}>
                                <Button>Anúnciar</Button>
                            </Link>
                        </div>
                    </div>
                    <div className={'relative xl:hidden'}>
                        <img className={'w-full block pt-[18rem] xl:hidden'} src={spiderMan} alt={'Spider Man'} />
                        <div className={'flex flex-col gap-6 px-6'}>
                            <div
                                className={
                                    'font-oxanium font-bold bg-btn-primary text-center bg-clip-text xl:w-1/2 text-transparent text-[32px]'
                                }
                            >
                                Ganhe XP e cresça na comunidade
                            </div>
                            <div>
                                A cada troca, compra ou venda, você acumula XP e com eles você é rankeado na sua cidade
                                tornando-se um membro mais confiável para toda a comunidade e recebendo benefícios
                                exclusivos.
                            </div>
                            <Card>
                                <div className={'flex flex-col gap-4 items-center'}>
                                    <div className={'font-oxanium font-bold text-center text-[28px]'}>
                                        <span className={'text-transparent bg-btn-primary bg-clip-text'}>
                                            Você ganhou
                                        </span>
                                        <span> 100 XP</span>
                                    </div>
                                    <BarsProgress percentage={80}>
                                        <div className={'w-[60px]'}>
                                            <img alt={'Fire Icon'} src={fireGif} />
                                        </div>
                                    </BarsProgress>
                                    <div className={'text-[18px]'}>Acumule XP e ganhe recompensa</div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdSection
