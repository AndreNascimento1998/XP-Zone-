import CardReword from "@/components/Card/CardReword.tsx";
import usePlatformEnum from "@/hooks/usePlatformEnum.ts";

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
    const { platformName } = usePlatformEnum();

    return (
        <div className={'flex flex-col gap-2'}>
            <div className={'px-4 text-[20px]'}>{title}</div>
            <div className={'flex lg:px-4 flex-grow lg:flex-wrap gap-4 overflow-x-auto lg:overflow-x-hidden'}>
                {games.map((game, gameIndex) => (
                    <div key={gameIndex}>
                        <div className={'w-[240px] min-w-[90%] padding-left padding-right cursor-pointer'}>
                            <CardReword text={game.name} src={game.src} platform={platformName[game.platform]} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardHighlights;