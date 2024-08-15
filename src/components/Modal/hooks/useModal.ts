import {useEffect, useRef, useState} from "react";

const useModal = (openModal: boolean) => {
    const [modalOpen, setModalOpen] = useState(openModal)
    const modalRef = useRef(null)

    useEffect(() => {
        setModalOpen(openModal)
    }, [openModal])

    return {
        modalOpen,
        setModalOpen,
        modalRef
    }
}

export default useModal