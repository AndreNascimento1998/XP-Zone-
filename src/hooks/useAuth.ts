import useUsersContext from '@/context/UsersContext/useUsersContext'
import User from '@/types/User.ts'

const useAuth = () => {
    const { setUser } = useUsersContext()

    const login = (user: User) => {
        localStorage.setItem('id', user.id.toString())
        setUser(user)
    }

    const logout = () => {
        localStorage.removeItem('id')
        localStorage.removeItem('favorite')
        setUser(null)
    }

    return {
        login,
        logout,
    }
}

export default useAuth
