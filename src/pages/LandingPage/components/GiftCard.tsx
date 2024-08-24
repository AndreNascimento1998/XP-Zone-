import hogwarts from '@/assets/images/landing-page/hogwarts.png'
import hogwartsMobile from '@/assets/images/landing-page/hogwarts-mobile.png'
import CardReword from '@/components/Card/CardReword'
import Button from '@/components/Button/Button'
import Game from '@/types/Game'

const GiftCard = () => {
    const game: Game = {
        id: 99999,
        name: 'André J N Cardoso',
        src: 'eldenRing',
        platform: 'ps5',
        highlight: false,
    }

    return (
        <div className={'relative'}>
            <img src={hogwartsMobile} alt="hogwarts" className={'w-full block lg:hidden'} />
            <img src={hogwarts} alt="hogwarts" className={'w-full hidden lg:block'} />
            <div className={'absolute block lg:grid grid-cols-2 px-20 items-center w-full top-40 lg:top-80'}>
                <div className={'flex flex-col  items-center'}>
                    <div className={'w-full lg:w-1/2'}>
                        <CardReword onClick={() => ''} game={game} />
                    </div>
                </div>
                <div className={'font-oxanium font-bold mt-10 text-center lg:text-start text-[20px]'}>
                    <div className={'text-[28px]'}>Card Zone</div>
                    <div className={'bg-btn-primary bg-clip-text text-[28px] text-transparent'}>
                        Presenteie um amigo
                    </div>
                    <div className={'hidden lg:block'}>
                        <div className={'flex px-6 lg:px-0 flex-col gap-6'}>
                            <div className={'text-justify'}>
                                <p>
                                    Você pode comprar Cards Zones para presentear seus amigos, com eles é possível
                                    comprar seus jogos favoritos na sua cidade e receber no conforto da sua casa.
                                </p>
                                <br />
                                <span>Aproveite e compre também nas lojas da XP Zone os melhores artigos gamers.</span>
                            </div>
                            <div className={'mb-8'}>
                                <Button>Comprar agora</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'flex px-6 flex-col gap-6 lg:hidden'}>
                <div className={'text-justify'}>
                    <p>
                        Você pode comprar Cards Zones para presentear seus amigos, com eles é possível comprar seus
                        jogos favoritos na sua cidade e receber no conforto da sua casa.
                    </p>
                    <br />
                    <span>Aproveite e compre também nas lojas da XP Zone os melhores artigos gamers.</span>
                </div>
                <div className={'mb-8'}>
                    <Button>Comprar agora</Button>
                </div>
            </div>
        </div>
    )
}

export default GiftCard
