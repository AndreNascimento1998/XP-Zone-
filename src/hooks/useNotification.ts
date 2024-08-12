import { toast, ToastOptions } from 'react-toastify'

const useNotification = () => {
    const showSuccess = (message: string, options?: ToastOptions) => {
        toast.success(message, {
            bodyClassName: 'text-[white]',
            bodyStyle: { background: '#19be3d' },
            progressStyle: { background: '#fff0f0' },
            style: { background: '#19be3d' },
            ...options,
        })
    }

    const showError = (message: string, options?: ToastOptions) => {
        toast.error(message, {
            bodyClassName: 'text-[white]',
            bodyStyle: { background: '#e74c3c' },
            progressStyle: { background: '#fff0f0' },
            style: { background: '#e74c3c' },
            ...options,
        })
    }

    return { showSuccess, showError }
}

export default useNotification;
