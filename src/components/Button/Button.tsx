// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    loading?: boolean
    type?: 'button' | 'submit'
    outlined?: boolean
    onClick?: () => void
}

const Button = ({ children, loading, outlined = false, type = 'button', onClick }: ButtonProps) => {
    return (
        <div className={'w-full'}>
            <button
                onClick={onClick}
                disabled={loading}
                type={type}
                className={`py-[14px] text-white rounded-[5px] px-5 w-full hover:bg-gray-400 active:bg-gray-500
                ${outlined ? 'bg-transparent border-[1px] py-[13px]' : 'bg-btn-primary hover:bg-btn-primary-hover active:bg-btn-primary'}`}
            >
                {children}
            </button>
        </div>
    )
}

export default Button
