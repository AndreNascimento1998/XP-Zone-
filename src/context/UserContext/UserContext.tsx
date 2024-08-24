import useUserContext from '@/context/UserContext/useUserContext'

const UserContext = () => {
    const { UserContext } = useUserContext()

    if (!UserContext) {
        throw new Error('useUserContext must be used within an UserContext.Provider')
    }

    return UserContext
}

export default UserContext
