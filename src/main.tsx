import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import routes from '@/routes/Index.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={routes} />
    </StrictMode>
)
