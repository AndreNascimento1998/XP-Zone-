import Card from '@/components/Card/Card.tsx'
import useFirstLetter from '@/hooks/useFirstLetter.ts'
import usePlatformEnum from '@/hooks/usePlatformEnum.ts'
import '@/pages/Home/components/styles/CardDetails.scss'
import User from '@/types/User.ts'
import Game from '@/types/Game.ts'

interface CardDetailsProps {
    users: User[]
}

const CardDetails = ({ users }: CardDetailsProps) => {
    const { firstLetter } = useFirstLetter()
    const { platformName } = usePlatformEnum()

    return (
        <div className={'flex text-[20px] flex-col gap-2'}>
            <div className={'px-4'}>Bibliotecas</div>
            <div className="gap-2 lg:grid lg:px-4 lg:grid-cols-3 lg:gap-4 overflow-x-auto flex">
                {users &&
                    users.map((item, index: number) => (
                        <div
                            key={index}
                            className="mb-4 lg:mb-0 padding-left padding-right min-w-[90%] lg:min-w-0 lg:flex-1 snap-center"
                        >
                            <Card>
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-4">
                                        <div>
                                            <div className="bg-[#E54B65] rounded-full font-bold text-[20px] px-6 py-4">
                                                {firstLetter(item.name)}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-bold text-lg">{item.name}</div>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {Array.from(new Set(item.games.map((game: Game) => game.platform))).map(
                                                    (platform: string, index: number) => (
                                                        <span
                                                            key={index}
                                                            className="italic text-[12px] flex items-center gap-1"
                                                        >
                                                            <div
                                                                className={'bg-gray-300  h-[5px] w-[5px] rounded-full'}
                                                            />{' '}
                                                            {platformName[platform]}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                        <div className="ml-auto font-oxanium font-bold bg-btn-primary bg-clip-text  text-transparent">
                                            OURO
                                        </div>
                                    </div>
                                    <div className="bg-[#E54B65] w-full h-[2px] rounded-full" />
                                    <div className="grid grid-cols-3  gap-2">
                                        {item.games &&
                                            item.games.map((game: Game, index: number) =>
                                                index < 8 ? (
                                                    <div
                                                        key={index}
                                                        className={
                                                            'border-2 text-center rounded-[10px] text-[12px] py-2 px-1'
                                                        }
                                                    >
                                                        {game.name}
                                                    </div>
                                                ) : (
                                                    index === 8 && (
                                                        <div
                                                            key={index}
                                                            className={
                                                                'border-2 border-[#E54B65] text-[#E54B65] text-center rounded-[10px] text-[12px] py-2 px-1'
                                                            }
                                                        >
                                                            + {item.games.length - 8} restantes
                                                        </div>
                                                    )
                                                )
                                            )}
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default CardDetails
