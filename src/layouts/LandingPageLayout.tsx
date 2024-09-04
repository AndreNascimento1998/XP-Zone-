import Footer from '@/pages/Footer/Index'
import LandingPage from '@/pages/LandingPage/Index'
import UsersProvider from "@/context/UsersContext/UsersProvider.tsx";

const LandingPageLayout = () => {
    return (
        <>
            <UsersProvider>
                <LandingPage />
                <Footer />
            </UsersProvider>
        </>
    )
}

export default LandingPageLayout
