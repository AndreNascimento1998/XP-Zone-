import { toast, ToastOptions } from 'react-toastify'
import { useEffect, useMemo } from 'react'

interface IToastOptions {
    message: string
    type: NotificationType
    optionsStyle?: ToastOptions
}

type NotificationType = 'messageSuccess' | 'messageError' | 'messageNeutral'

const useNotification = ({ message, type, optionsStyle }: IToastOptions) => {
    const showMessageSuccess = (message: string, options?: ToastOptions) => {
        toast.success(message, {
            bodyClassName: 'text-[white]',
            bodyStyle: { background: '#19be3d' },
            progressStyle: { background: '#fff0f0' },
            style: { background: '#19be3d' },
            ...options,
            ...optionsStyle,
        })
    }

    const showMessageNeutral = (message: string, options?: ToastOptions) => {
        toast(message, {
            bodyClassName: 'text-[white]',
            bodyStyle: { background: '#3498db' },
            progressStyle: { background: '#fff0f0' },
            style: { background: '#3498db' },
            ...optionsStyle,
            ...options,
        })
    }

    const showMessageError = (message: string, options?: ToastOptions) => {
        toast.error(message, {
            bodyClassName: 'text-[white]',
            bodyStyle: { background: '#e74c3c' },
            progressStyle: { background: '#fff0f0' },
            style: { background: '#e74c3c' },
            ...optionsStyle,
            ...options,
        })
    }

    const isErrorMessage = useMemo(() => {
        const typeMessage = {
            messageError: showMessageError,
            messageSuccess: showMessageSuccess,
            messageNeutral: showMessageNeutral,
        }

        return typeMessage[type]
    }, [type])

    useEffect(() => {
        isErrorMessage(message)
    }, [isErrorMessage, message])
}

export default useNotification
