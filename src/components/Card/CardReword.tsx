import mk from '@/assets/images/games/mk.png'

const CardReword = () => {
    return (
        <div className={'w-full bg-card border-[2px] border-[#E54B65] rounded-[16px]'}>
            <div className={'h-full'}>
                <img src={mk} alt={"Mortal Kombat"} className={'w-full object-cover'} />
            </div>
            <div className={'flex gap-2 p-2'}>
                <div className={'font-oxanium font-bold bg-btn-primary bg-clip-text  text-transparent'}>
                    André J. Nascimento
                </div>
                <div>
                    Ouro
                </div>
            </div>
        </div>
    )
}

export default CardReword