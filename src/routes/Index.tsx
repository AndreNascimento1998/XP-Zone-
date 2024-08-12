import { createBrowserRouter } from 'react-router-dom'
import App from '@/App.tsx'
import Home from '@/pages/Home/Index.tsx'
import Login from '@/views/Login/Index.tsx'
import RegisterUser from "../views/Login/RegisterUser/Index.tsx"

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