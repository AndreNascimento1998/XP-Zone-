import ps5Banner from '@/assets/images/cardBanner/ps5.png'
import xboxBanner from '@/assets/images/cardBanner/xbox.png'

const SectionBanner = () => {
    return (
        <div className={'flex flex-col gap-4 px-4 mb-10'}>
            <div className={'text-[20px]'}>Monte sua biblioteca</div>
            <div className={'flex flex-col gap-4 lg:justify-between flex-wrap w-full lg:flex-row'}>
                <img src={ps5Banner} alt={'Banner PS5'} />
                <img src={xboxBanner} alt={'Banner Xbox'} />
            </div>
        </div>
    )
}

export default SectionBanner
