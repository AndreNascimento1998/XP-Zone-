import CardReword from "@/components/Card/CardReword.tsx"
import Game from "@/types/Game.ts"

interface CardLibraryProps {
    games: Game[]
    title: string
}

const CardsLibrary = ({games, title}: CardLibraryProps) => {


    return (
        <div className={'flex flex-col gap-4'}>
            <div className={'text-[20px]'}>{title}</div>
            {games.length === 0 ?
                <div className={'text-center bg-btn-primary font-bold italic rounded-[10px] p-1'}> Nenhum item encontrado</div>
                :
                <div className={'flex gap-4 overflow-x-auto lg:overflow-x-hidden lg:flex-wrap '}>
                    {
                        games.map((game) => (
                            <div className={'min-w-full md:min-w-0'} key={game.id}>
                                <CardReword onClick={(game) => console.log(game)} game={game}/>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default CardsLibrary
