import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import Home from '@/layouts/HomePageLayout'
import RegisterUser from '@/pages/Login/RegisterUser'
import LandingPageLayout from '@/layouts/LandingPageLayout'
import Dashboard from '@/pages/Dashboard/Index.tsx'
import Library from '@/pages/Library/Index.tsx'
import Favorite from '@/pages/Favorite/Index.tsx'
import PrivateRoute from './PrivateRoute.tsx'
import PrivateRouteRegister from './PrivateRouteRegister.tsx'
import PurchaseGame from '@/pages/PurchaseGame/Index.tsx'

const routes = createBrowserRouter([
    {
        path: '/register-user',
        element: (
            <PrivateRouteRegister>
                <RegisterUser />
            </PrivateRouteRegister>
        ),
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
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                ),
            },
            {
                path: '/library',
                element: (
                    <PrivateRoute>
                        <Library />
                    </PrivateRoute>
                ),
            },
            {
                path: '/favorites',
                element: (
                    <PrivateRoute>
                        <Favorite />
                    </PrivateRoute>
                ),
            },
            {
                path: 'purchase-game/:id',
                element: (
                    <PrivateRoute>
                        <PurchaseGame />
                    </PrivateRoute>
                ),
            },
        ],
    },
])

export default routes
