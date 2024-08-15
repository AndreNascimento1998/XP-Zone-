import HamburguerButtonIcon from "@/assets/Icons/Others/HamburguerButtonIcon.tsx";
import useButtonHamburguer from "@/components/Button/hooks/useButtonHamburguer.ts";

interface ButtonHamburguerProps {
    items: {
        name: string
        callback: () => void
    }[],
    onItemClick?: (item: string) => void
}

const ButtonHamburguer = ({ items, onItemClick }: ButtonHamburguerProps) => {
    const {
        isOpen,
        menuRef,
        toggleMenu,
        handleItemClick
    } = useButtonHamburguer(onItemClick);

    return (
        <div className="relative" ref={menuRef}>
            <div onClick={toggleMenu}>
                <HamburguerButtonIcon />
            </div>
            <div className={`absolute right-0 top-full transition-max-height duration-300 ease-out overflow-hidden ${isOpen ? 'max-h-50' : 'max-h-0 opacity-0'}`}>
                <ul className="bg-white bg-opacity-50 p-3 min-w-[120px] rounded-md list-none break-words text-center font-bold">
                    {items && items.map((item, index) => (
                        <li key={index} onClick={() => handleItemClick(item.name, item.callback)} className="text-purple-900 border-b border-gray-700 break-words overflow-hidden">
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ButtonHamburguer;