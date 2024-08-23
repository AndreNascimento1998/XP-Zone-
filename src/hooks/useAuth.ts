import useUserContext from '@/context/UserContext/useUserContext.ts'
import User from '@/types/User.ts'

const useAuth = () => {
    const { setUser } = useUserContext()

    const login = (user: User) => {
        localStorage.setItem('id', user.id.toString())
        setUser(user)
    }

    const logout = () => {
        localStorage.removeItem('id')
        setUser(null)
    }

    return {
        login,
        logout,
    }
}

export default useAuth
