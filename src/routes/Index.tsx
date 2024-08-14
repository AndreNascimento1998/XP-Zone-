import { createBrowserRouter } from 'react-router-dom'
import App from '@/App.tsx'
import Home from '@/pages/Home/Index.tsx'
import Login from '@/views/Login/Index.tsx'
import RegisterUser from "@/views/Login/RegisterUser.tsx"
import LandingPage from "@/views/LandingPage/Index.tsx"

const routes = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register-user',
        element: <RegisterUser />
    },
    {
        path: '/landing-page',
        element: <LandingPage />
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