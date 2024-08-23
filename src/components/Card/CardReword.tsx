import useCardReword from "@/components/Card/hooks/useCardReword.ts";
import Game from "@/types/Game.ts";
import usePlatformEnum from "@/hooks/usePlatformEnum.ts";

interface CardRewordProps {
    game: Game
}

const CardReword = ({game}: CardRewordProps) => {
    const { platformName } = usePlatformEnum();
    const { images } = useCardReword()

    return (
        <div className={'min-w-0 bg-card border-[2px] border-[#E54B65] rounded-[16px]'}>
            <div className={''}>
                <img src={images[game.src]} alt={game.name} className={'w-full'} />
            </div>
            <div className={'flex flex-col p-2 gap-2'}>
                <div className={'flex items-center justify-between gap-2 font-oxanium font-bold bg-btn-primary bg-clip-text text-transparent'}>
                    <div>
                        {game.name}
                    </div>
                </div>
                {game.platform && <div className={'font-bold justify-between'}>
                    <span>
                        {platformName[game.platform]}
                    </span>
                </div>}
            </div>
        </div>
    )
}

export default CardReword