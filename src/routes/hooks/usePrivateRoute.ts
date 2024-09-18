import { useState } from "react";

const usePrivateRoute = () => {
    const [isAuth] = useState(!!localStorage.getItem('id'))

    return { isAuth }
}

export default usePrivateRoute
