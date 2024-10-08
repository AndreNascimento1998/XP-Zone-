import { FieldValues, UseFormRegister } from 'react-hook-form'
import { useState } from 'react'
import HiddenPasswordIcon from '@/assets/Icons/Others/HiddenPasswordIcon'
import ShowPasswordIcon from '@/assets/Icons/Others/ShowPasswordIcon.tsx'

interface InputProps {
    label: string
    register: UseFormRegister<FieldValues>
    name: string
    outlined?: boolean
    placeholder?: string
    type: 'text' | 'password' | 'email' | 'number'
}

const Input = ({ label, register, name, outlined = false, placeholder, type }: InputProps) => {
    const [typeInput, setTypeInput] = useState(type)

    return (
        <div className={'w-full'}>
            <label className={'text-[#fff] font-light'}>{label}</label>
            <span className={'relative'}>
                <input
                    {...register(name)}
                    type={typeInput}
                    className={`px-2 py-3 rounded-[6px] w-full
                    ${outlined ? 'text-[white] border-[1px] border-[white] bg-transparent' : ''}
                    ${type === 'password' ? 'pr-10' : ''}
                `}
                    placeholder={placeholder}
                />
                {type === 'password' ? (
                    <div
                        onClick={() => (typeInput === 'password' ? setTypeInput('text') : setTypeInput('password'))}
                        className={'absolute right-3 top-1/2 transform -translate-y-1/2'}
                    >
                        {typeInput === 'password' ? (
                            <HiddenPasswordIcon color={outlined ? '#EAE7F0' : '#000000'} />
                        ) : (
                            <ShowPasswordIcon />
                        )}
                    </div>
                ) : null}
            </span>
        </div>
    )
}

export default Input
