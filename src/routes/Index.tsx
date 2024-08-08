import { createBrowserRouter } from 'react-router-dom'
import App from '@/App.tsx'
import Home from '@/pages/Home/Index.tsx'
import Login from '@/pages/Login/Index.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])

export default router