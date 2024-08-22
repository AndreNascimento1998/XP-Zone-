import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from '@/App.tsx'
import Home from '@/pages/Home/Index.tsx'
import RegisterUser from "@/pages/Login/RegisterUser.tsx"
import LandingPageLayout from "@/layouts/LandingPageLayout.tsx"

const routes = createBrowserRouter([
    {
        path: '/register-user',
        element: <RegisterUser />
    },
    {
        path: '/landing-page',
        element: <LandingPageLayout />
    },
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

export default routes
