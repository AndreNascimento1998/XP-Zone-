import {useEffect, useRef, useState} from "react";

const ButtonHamburguer = (onItemClick: (item: string) => void) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    }

    const handleItemClick = (item: string, callback: () => void) => {
        onItemClick(item)
        callback()
        toggleMenu()
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])

    return {isOpen, menuRef, toggleMenu, handleItemClick}
}

export default ButtonHamburguer