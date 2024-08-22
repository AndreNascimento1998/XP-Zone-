import {z} from "zod"
import {FieldError, useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import IDataForm from "@/types/DataForm.ts"
import {useNavigate} from "react-router-dom";
import mock from "@/mocks/user.json"
import useUserContext from "@/context/UserContext/useUserContext.ts"

const schema = z.object({
    email: z.string().min(1, 'Campo obrigatório'),
    password: z.string().min(8, 'Campo deve conter no mínimo 8 caracteres')
})
const useFormLogin = () => {
    const navigate = useNavigate()
    const mockParsed = JSON.parse(JSON.stringify(mock))
    const { setUser } = useUserContext()

    const { handleSubmit, register, formState: { errors } } = useForm({
        mode: 'all',
        criteriaMode: 'all',
        resolver: zodResolver(schema)
    })

    const getErrorMessage = (error: FieldError | undefined): string | null => {
        return error?.message || null
    }

    const resolveMockUser = (email: string, password: string) => {
        try {
            const emailUser = mockParsed.find((user: any) => user.email === email)

            return emailUser.password === password ? emailUser : false
        } catch (e) {
            return false
        }
    }

    const handleSubmitForm = (data: IDataForm) => {
        const response = resolveMockUser(data.email, data.password)
        if ( response ) {
            localStorage.setItem('id', response.id)
            setUser(response)
            navigate('/')
        }
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