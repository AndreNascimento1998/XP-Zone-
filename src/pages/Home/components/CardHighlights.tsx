import CardReword from "@/components/Card/CardReword.tsx"

interface CardHighlightsProps {
    title: string;
    games: {
        name: string;
        platform: string;
        src: string;
        highlight: boolean;
    }[]
}

const CardHighlights = ({ title, games }: CardHighlightsProps) => {

    return (
        <div className={'flex flex-col gap-2'}>
            <div className={'px-4 text-[20px]'}>{title}</div>
            <div className={'flex lg:px-4 flex-grow lg:flex-wrap gap-4 overflow-x-auto lg:overflow-x-hidden'}>
                {games.map((game, gameIndex) => (
                    <div key={gameIndex}>
                        <div className={'w-[240px] min-w-[90%] padding-left padding-right cursor-pointer'}>
                            <CardReword game={game}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardHighlights;