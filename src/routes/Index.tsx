import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import Home from '@/layouts/HomePageLayout'
import RegisterUser from '@/pages/Login/RegisterUser'
import LandingPageLayout from '@/layouts/LandingPageLayout'

const routes = createBrowserRouter([
    {
        path: '/register-user',
        element: <RegisterUser />,
    },
    {
        path: '/landing-page',
        element: <LandingPageLayout />,
    },
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
])

export default routes
