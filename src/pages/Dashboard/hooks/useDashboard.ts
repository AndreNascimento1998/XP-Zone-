import useUsersContext from '@/context/UsersContext/useUsersContext'

const useDashboard = () => {
    const { user } = useUsersContext()

    const description =
        'Olá, jogadores! Minhas regras são básicas, para garantir uma boa prática de troca e venda. Meus jogos são seminovos e estou disposta a trocar pelos jogos que tenho interesse. A primeira regra é que não aceito jogos com danificação seja da mais pequena, não aceito entregas pelas mãos de terceiros e tenho preferência em me comunicar com o dono do jogo que já jogou e sabe me passa as devidas informações.'

    const handleClick = () => {
        console.log('Anunciar grátis')
    }

    return {
        description,
        user,
        handleClick,
    }
}

export default useDashboard
