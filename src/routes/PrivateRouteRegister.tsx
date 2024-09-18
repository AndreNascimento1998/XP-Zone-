import { Navigate } from 'react-router-dom'
import usePriovateRouteRegister from './hooks/usePriovateRouteRegister.ts'

interface PrivateRouteRegisterProps {
    children: JSX.Element
}

const PrivateRouteRegister = ({ children }: PrivateRouteRegisterProps) => {
    const { isValidRoute } = usePriovateRouteRegister()

    return isValidRoute ? children : <Navigate to="/" />
}

export default PrivateRouteRegister
