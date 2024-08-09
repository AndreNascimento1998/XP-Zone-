import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    loading?: boolean;
    type?: 'button' | 'submit',
    outlined: boolean
    onClick?: () => void;
}

const Button = ({ children, loading, outlined, type, ...rest }: ButtonProps) => {
    return (
        <div className={'w-full'}>
            <button
                onClick={rest.onClick}
                disabled={loading}
                type={type}
                {...rest}
                className={`py-3 text-white rounded-[5px] px-5 w-full active:bg-gray-400 
                ${outlined ? 'bg-transparent border-[1px]' : 'bg-btn-primary active:bg-btn-primary-hover'}`}
            >
                {children}
            </button>
        </div>
    );
}

export default Button;