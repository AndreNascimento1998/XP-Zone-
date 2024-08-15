import { useRef, useState} from "react"
import useListenerMouseDown from "@/hooks/useListenerMouseDown.ts";

const ButtonHamburguer = (onItemClick: (item: string) => void) => {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false)
        }
    }

    useListenerMouseDown(handleClickOutside)

    const handleItemClick = (item: string, callback: () => void) => {
        onItemClick(item)
        callback()
        toggleMenu()
    }

    return {isOpen, menuRef, toggleMenu, handleItemClick}
}

export default ButtonHamburguer