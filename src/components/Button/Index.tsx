interface ButtonProps {
    children: React.ReactNode;
    loading?: boolean;
    type: type,
    outlined: boolean
    onClick?: () => void;
}

interface type {
    type: 'button' | 'submit';
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