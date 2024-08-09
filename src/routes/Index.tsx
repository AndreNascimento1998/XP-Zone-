import { createBrowserRouter } from 'react-router-dom'
import App from '@/App.tsx'
import Home from '@/pages/Home/Index.tsx'
import Login from '@/views/Login/Index.tsx'

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
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

export default router