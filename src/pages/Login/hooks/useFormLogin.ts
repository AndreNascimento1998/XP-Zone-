import {z} from "zod"
import {FieldError, useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import IDataForm from "@/types/DataForm.ts"

const schema = z.object({
    email: z.string().min(1, 'Campo obrigatório'),
    password: z.string().min(8, 'Campo deve conter no mínimo 8 caracteres')
})

const useFormLogin = () => {
    const { handleSubmit, register, formState: { errors } } = useForm({
        mode: 'all',
        criteriaMode: 'all',
        resolver: zodResolver(schema)
    })

    const getErrorMessage = (error: FieldError | undefined): string | null => {
        return error?.message || null
    }

    const handleSubmitForm = (data: IDataForm) => {
        console.log(data)
    }

    return {
        handleSubmit,
        register,
        errors,
        getErrorMessage,
        handleSubmitForm
    }
}

export default useFormLogin