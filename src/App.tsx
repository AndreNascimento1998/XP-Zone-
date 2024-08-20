import { Outlet } from 'react-router-dom'
import '@/styles/global.scss'
import Header from '@/pages/Header/Index.tsx'

function App() {

  return (
    <div className={'3xl:px-[20rem]'}>
      <Header  />
      <Outlet />
    </div>
  )
}

export default App
