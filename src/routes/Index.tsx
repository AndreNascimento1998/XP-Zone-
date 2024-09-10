import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import Home from '@/layouts/HomePageLayout'
import RegisterUser from '@/pages/Login/RegisterUser'
import LandingPageLayout from '@/layouts/LandingPageLayout'
import Dashboard from '@/pages/Dashboard/Index.tsx'

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
            {
                path: '/dashboard',
                element: <Dashboard />,
            },
        ],
    },
])

export default routes
