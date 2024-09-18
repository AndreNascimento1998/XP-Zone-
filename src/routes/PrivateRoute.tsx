import { Navigate } from 'react-router-dom'
import usePrivateRoute from './hooks/usePrivateRoute.ts'

interface PrivateRouteProps {
    children: JSX.Element
}
const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { isAuth } = usePrivateRoute()

    return isAuth ? children : <Navigate to="/loading-page" />
}

export default PrivateRoute
