import {useNavigate} from 'react-router-dom'

const useHeroSection = () => {
    const navigate = useNavigate()

    const items = [
        {
            name: 'Login',
            callback: () => navigate('/login')
        },
        {
            name: 'Register',
            callback: () => navigate('/register-user')
        }
    ]

    const handleItemClick = (item: string) => {
        console.log(`Item clicked: ${item}`)
    }

    return {
        items,
        handleItemClick
    }
}

export default useHeroSection