import useCardReword from "@/components/Card/hooks/useCardReword.ts";

interface CardRewordProps {
    text: string
    patent?: string
    src: string
    platform: string
}

const CardReword = ({text, patent, src, platform}: CardRewordProps) => {
    const { images } = useCardReword()

    return (
        <div className={'min-w-0 bg-card border-[2px] border-[#E54B65] rounded-[16px]'}>
            <div className={''}>
                <img src={images[src]} alt={text} className={'w-full'} />
            </div>
            <div className={'flex flex-col p-2 gap-2'}>
                <div className={'flex items-center justify-between gap-2 font-oxanium font-bold bg-btn-primary bg-clip-text text-transparent'}>
                    <div>
                        {text}
                    </div>
                    {patent && <div className={'bg-[#E54B65] text-white px-2 py-1 rounded-[16px]'}>{patent}</div>}
                </div>
                {platform && <div className={'font-bold justify-between'}>
                    <span>
                        {platform}
                    </span>
                </div>}
            </div>
        </div>
    )
}

export default CardReword