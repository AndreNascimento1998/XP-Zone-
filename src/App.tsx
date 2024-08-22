import { Outlet } from 'react-router-dom'
import '@/styles/global.scss'
import Header from '@/pages/Header/Index.tsx'
import UserProvider from "@/context/UserContext/UserProvider.tsx";

function App() {

    return (
        <div className={'3xl:px-[20rem]'}>
            <UserProvider>
                <Header  />
                <Outlet />
            </UserProvider>
        </div>
    )
}

export default App
