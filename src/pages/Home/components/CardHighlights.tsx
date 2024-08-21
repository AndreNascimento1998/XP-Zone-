import CardReword from "@/components/Card/CardReword.tsx";
import usePlatformEnum from "@/hooks/usePlatformEnum.ts";

const CardHighlights = () => {
    const { platformName } = usePlatformEnum()

    const users = [
        {
            name: 'John Doe',
            email: 'adsadsa@dsadsa',
            platform: ['ps4', 'xone', 'switch', 'xseries_s' ],
            games: [
                {
                    name: 'Elden Ring',
                    platform: 'ps4',
                    src: 'eldenRing',
                    highlight: false
                },
                {
                    name: 'Demon Souls',
                    platform: 'ps5',
                    src: 'ds',
                    highlight: false
                },
                {
                    name: 'Gears of War 4',
                    platform: 'xseries',
                    src: 'gears4',
                    highlight: true
                },
            ]
        }
    ]

    return (
        <div>
            <div className={'flex flex-grow lg:flex-wrap gap-4 overflow-x-auto lg:overflow-x-hidden'}>
                {users && users.map((user, userIndex) => (
                    user.games.map((game, gameIndex) => (
                        <div key={`${userIndex}-${gameIndex}`}>
                            <div className={'w-[240px] min-w-[90%] cursor-pointer'}>
                                <CardReword text={game.name} src={game.src} platform={platformName[game.platform]} />
                            </div>
                        </div>
                    ))
                ))}
            </div>
        </div>
    )
}

export default CardHighlights