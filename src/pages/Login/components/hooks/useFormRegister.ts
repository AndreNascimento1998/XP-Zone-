import { useForm, FieldError } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import IDataForm from '@/types/DataForm.ts'

const schema = z
    .object({
        name: z.string().min(3, 'Nome deve conter no mínimo 3 caracteres'),
        email: z.string().min(1, 'Campo obrigatório'),
        password: z.string().min(8, 'Senha deve conter no mínimo 8 caracteres'),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'As senhas devem ser iguais',
        path: ['confirmPassword'],
    })

const useRegisterForm = (onSubmit: (data: IDataForm, step: number) => void) => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        mode: 'all',
        criteriaMode: 'all',
        resolver: zodResolver(schema),
    })

    const handleSubmitForm = (data: IDataForm) => {
        const step = 2
        onSubmit(data, step)
    }

    const getErrorMessage = (error: FieldError | undefined): string | null => {
        return error?.message || null
    }

    return {
        handleSubmit,
        register,
        errors,
        getErrorMessage,
        handleSubmitForm,
    }
}

export default useRegisterForm
