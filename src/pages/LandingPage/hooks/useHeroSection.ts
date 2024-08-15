import {useNavigate} from 'react-router-dom'
import {useState} from "react";

const useHeroSection = () => {
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false)

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

    const handleClick = () => {
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleItemClick = (item: string) => {
        console.log(`Item clicked: ${item}`)
    }

    return {
        items,
        openModal,
        handleItemClick,
        handleCloseModal,
        handleClick
    }
}

export default useHeroSection