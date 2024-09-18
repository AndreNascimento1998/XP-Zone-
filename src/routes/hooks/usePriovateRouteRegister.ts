import { useState } from 'react'

const usePriovateRouteRegister = () => {
    const [isValidRoute] = useState(!localStorage.getItem('id'))

    return { isValidRoute }
}

export default usePriovateRouteRegister
