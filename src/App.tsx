import { Outlet } from 'react-router-dom'
import '@/styles/global.scss'
import Header from '@/pages/Header/Index.tsx'

function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
