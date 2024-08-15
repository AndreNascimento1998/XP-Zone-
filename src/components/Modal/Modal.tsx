import { useEffect } from "react"
import useModal from "@/components/Modal/hooks/useModal.ts";

interface ModalProps {
    children: React.ReactNode
    openModal: boolean,
    onClickClose: () => void
}
const Modal = ({ children, openModal, onClickClose }: ModalProps) => {
    const {
        modalOpen,
        modalRef
    } = useModal(openModal)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClickClose()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [modalRef, onClickClose])

    if (!modalOpen) return null

    return (
        <div className={'fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50'}>
            <div ref={modalRef}>
            {children}
            </div>
        </div>
    )
}

export default Modal
