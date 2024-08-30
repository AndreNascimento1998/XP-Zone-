import banner from '@/assets/images/dashboard/banner.png'
import CardRules from "@/components/Card/CardRules.tsx";
import CardProgress from "./components/CardProgress.tsx";

const Dashboard = () => {
    const description = 'Olá, jogadores! Minhas regras são básicas, para garantir uma boa prática de troca e venda. Meus jogos são seminovos e estou disposta a trocar pelos jogos que tenho interesse. A primeira regra é que não aceito jogos com danificação seja da mais pequena, não aceito entregas pelas mãos de terceiros e tenho preferência em me comunicar com o dono do jogo que já jogou e sabe me passa as devidas informações.'

    const handleClick = () => {
        console.log('Anunciar grátis')
    }

    return (
        <div className={'mb-20'}>
            <img className={'absolute top-0'} src={banner} alt={'sack boy'}/>
            <div className={'relative flex flex-col gap-4 pt-[26rem] px-4'}>
                <CardRules onClick={handleClick} title={'Regras da estante'} buttonText={'Anúnciar grátis'} description={description} />
                <CardProgress />
            </div>
        </div>
    )
}

export default Dashboard
