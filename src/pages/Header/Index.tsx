import Logo from "@/assets/Icons/Logo/Logo.tsx"
import ButtonCustom from "@/components/Button/ButtonCustom.tsx"
import BellIcon from "@/assets/Icons/Others/BellIcon.tsx"
import BellNotificationIcon from "@/assets/Icons/Others/BellNotificationIcon.tsx"
import DashboardIcon from "@/assets/Icons/Header/DashboardIcon.tsx"
import MyDataIcon from "@/assets/Icons/Header/MyDataIcon.tsx"
import LibraryIcon from "@/assets/Icons/Header/LibraryIcon.tsx"
import FavoriteIcon from "@/assets/Icons/Header/FavoriteIcon.tsx"
import ExitIcon from "@/assets/Icons/Header/ExitIcon.tsx"
import '@/pages/Header/styles/Header.scss'
const Header = () => {
    const itemsNotification = [
        {name: "um", callback: () => console.log('um')},
        {name: "dois", callback: () => console.log('dois')},
    ]

    const items = [
        {name: "Dashboard", component: DashboardIcon, callback: () => console.log('um')},
        {name: "Meus dados", component: MyDataIcon, callback: () => console.log('dois')},
        {name: "Biblioteca", component: LibraryIcon, callback: () => console.log('dois')},
        {name: "Favoritos", component: FavoriteIcon, callback: () => console.log('dois')},
        {name: "Sair", component: ExitIcon, callback: () => console.log('dois')}
    ]

    return (
        <div className={'flex items-center justify-between p-6 '}>
            <div>
                <Logo  width={80} height={60} />
            </div>
            <div className={'flex items-center gap-4'}>
                <div>
                    <ButtonCustom onItemClick={(item) => console.log(item)} items={itemsNotification}>
                        {itemsNotification && itemsNotification.length ? (
                            <div className={'bg-card-light bell-icon hover:bg-gray-500 hover:bg-opacity-40 rounded-full p-3'}><BellNotificationIcon/></div>) :
                            (<div className={'bg-card-light hover:bg-gray-500 hover:bg-opacity-40 rounded-full p-3'}><BellIcon/></div>)
                        }
                    </ButtonCustom>
                </div>
                <div>
                    <ButtonCustom onItemClick={(item) => console.log(item)} items={items}>
                        <div className={'bg-green-900 hover:bg-gray-500 hover:bg-opacity-40 rounded-full p-3'}>A</div>
                    </ButtonCustom>
                </div>
            </div>
        </div>
    )
}

export default Header