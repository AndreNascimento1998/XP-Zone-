import MainPagesLayout from '@/layouts/MainPagesLayout.tsx'
import { useContext } from 'react'
import UsersContext from '@/context/UsersContext/UsersContext.ts'
import CardsLibrary from './components/CardsLibrary.tsx'
import useLibrary from './hooks/useLibrary.ts'

const Library = () => {
    const { user } = useContext(UsersContext)
    const { xboxGames, psGames, ninGames } = useLibrary(user.games)

    return (
        <div>
            <MainPagesLayout>
                <div className={'flex flex-col gap-10 '}>
                    <CardsLibrary title={'Jogos Xbox'} games={xboxGames} />
                    <CardsLibrary title={'Jogos Playstation'} games={psGames} />
                    <CardsLibrary title={'Jogos Nintendo'} games={ninGames} />
                </div>
            </MainPagesLayout>
        </div>
    )
}

export default Library
