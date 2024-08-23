import { useEffect, useRef, useState } from 'react'
import useListenerMouseDown from '@/hooks/useListenerMouseDown.ts'

const useModal = (openModal: boolean, onClickClose: () => void) => {
    const [modalOpen, setModalOpen] = useState(openModal)
    const modalRef = useRef(null)

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClickClose()
        }
    }

    useListenerMouseDown(handleClickOutside)

    useEffect(() => {
        setModalOpen(openModal)
    }, [openModal])

    return {
        modalOpen,
        setModalOpen,
        modalRef,
    }
}

export default useModal
