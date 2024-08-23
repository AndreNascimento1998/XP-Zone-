import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const useHeroSection = () => {
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false)

    const items = [
        {
            name: 'Login',
            callback: () => '',
        },
        {
            name: 'Register',
            callback: () => navigate('/register-user'),
        },
    ]

    const handleClick = () => {
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleItemClick = () => {
        setOpenModal(true)
    }

    return {
        items,
        openModal,
        handleItemClick,
        handleCloseModal,
        handleClick,
    }
}

export default useHeroSection
