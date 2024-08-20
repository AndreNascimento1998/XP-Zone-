import useButtonCustom from "@/components/Button/hooks/useButtonCustom.ts"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from 'react'

interface ButtonCustomProps {
    children: React.ReactNode;
    items: {
        name: string;
        component?: React.ElementType;
        callback: () => void;
    }[];
    onItemClick: (item: string) => void;
}

const ButtonCustom = ({ items, onItemClick, children }: ButtonCustomProps) => {
    const {
        isOpen,
        menuRef,
        toggleMenu,
        handleItemClick
    } = useButtonCustom(onItemClick);

    return (
        <div className="relative text-center cursor-pointer border-[2px] h-[52px] w-[52px] border-[#E54B65] rounded-full" ref={menuRef}>
            <div onClick={toggleMenu}>
                {children}
            </div>
            <div className={`absolute right-0 top-full transition-max-height z-50 duration-300 ease-out overflow-hidden ${isOpen ? 'max-h-50' : 'max-h-0 opacity-0'}`}>
                <div className="absolute right-4 top-[-8px] w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-transparent border-b-[#E54B65]"></div>
                <ul className="bg-card-light border-[2px] border-[#E54B65] bg-opacity-50 p-3 w-[150px] xl:w-[180px] rounded-md list-none break-words text-center font-bold">
                    {items && items.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleItemClick(item.name, item.callback)}
                            className={`flex gap-4 py-3 text-[#E7E6EA] hover:text-gray-500 items-center break-words overflow-hidden ${item.component ? 'justify-start' : 'justify-center'}`}
                        >
                            {item.component && <span>{React.createElement(item.component)}</span>}
                            <span className={'text-[12px] lg:text-[14px]'}>{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ButtonCustom;