import Logo from '@/assets/Icons/Logo/Logo'
import ButtonCustom from '@/components/Button/ButtonCustom'
import BellIcon from '@/assets/Icons/Others/BellIcon'
import BellNotificationIcon from '@/assets/Icons/Others/BellNotificationIcon'
import '@/pages/Header/styles/Header.scss'
import useFirstLetter from '@/hooks/useFirstLetter'
import useUserContext from '@/context/UserContext/useUserContext'
import useHeader from './hooks/useHeader'
const Header = () => {
    const { firstLetter } = useFirstLetter()
    const { user } = useUserContext()
    const { itemsNotification, items } = useHeader()

    return (
        <div className={'flex items-center justify-between p-6 '}>
            <div>
                <Logo width={80} height={60} />
            </div>
            <div className={'flex items-center gap-4'}>
                <div>
                    <ButtonCustom onItemClick={(item) => console.log(item)} items={itemsNotification}>
                        {itemsNotification && itemsNotification.length ? (
                            <div
                                className={
                                    'bg-card-light bell-icon hover:bg-gray-500 hover:bg-opacity-40 rounded-full p-3'
                                }
                            >
                                <BellNotificationIcon />
                            </div>
                        ) : (
                            <div className={'bg-card-light hover:bg-gray-500 hover:bg-opacity-40 rounded-full p-3'}>
                                <BellIcon />
                            </div>
                        )}
                    </ButtonCustom>
                </div>
                <div>
                    <ButtonCustom onItemClick={(item) => console.log(item)} items={items}>
                        <div className={'bg-green-900 hover:bg-gray-500 hover:bg-opacity-40 rounded-full p-3'}>
                            {firstLetter(user?.name)}
                        </div>
                    </ButtonCustom>
                </div>
                <div
                    className={
                        'hidden lg:block font-oxanium font-bold bg-btn-primary bg-clip-text text-transparent text-[22px] lg:text-[20px]'
                    }
                >
                    {user?.name}
                </div>
            </div>
        </div>
    )
}

export default Header
