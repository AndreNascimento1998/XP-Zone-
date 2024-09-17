import BarsProgress from '@/components/Bars/BarsProgress.tsx'
import gold from '@/assets/images/dashboard/gold.png'
import Card from '@/components/Card/Card.tsx'

const CardProgress = () => {
    return (
        <Card>
            <div className={'grid grid-cols-6 gap-2'}>
                <div className={'flex flex-col items-center col-span-1'}>
                    <img src={gold} alt={''} />
                    <div
                        className={
                            'font-oxanium font-bold bg-btn-primary text-center bg-clip-text text-transparent text-[16px]'
                        }
                    >
                        OURO
                    </div>
                </div>
                <div className={'col-span-5 flex flex-col items-center gap-2'}>
                    <div className={'w-full flex items-center gap-1'}>
                        <span>10%</span>
                        <BarsProgress percentage={10} />
                    </div>
                    <div className={'w-full flex items-center gap-1'}>
                        <span>98%</span>
                        <BarsProgress percentage={98} />
                    </div>
                    <div className={'w-full flex items-center gap-1'}>
                        <span>53%</span>
                        <BarsProgress percentage={53} />
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default CardProgress
