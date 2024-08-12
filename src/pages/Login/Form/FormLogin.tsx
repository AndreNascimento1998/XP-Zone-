import Input from "@/components/Input/Index.tsx"
import {FieldError, useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Button from "@/components/Button/Index.tsx"
import {Link} from "react-router-dom"
import IDataForm from "@/types/DataForm.ts";

const schema = z.object({
    email: z.string().min(1, 'Campo obrigatório'),
    password: z.string().min(8, 'Campo deve conter no mínimo 8 caracteres')
})

const Login = () => {
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

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)} className={'w-full flex flex-col gap-2'}>
            <div className={'w-full flex flex-col gap-2'}>
                <Input
                    placeholder={'Digite seu e-mail'}
                    label={'Email'}
                    name="email"
                    type={'text'}
                    register={register}
                    outlined={true}
                />
                {errors.email?.message ? (
                    <div className={'text-[red] text-[14px] italic'}>{getErrorMessage(errors.email)}</div>
                ) : (
                    <div className={'invisible'}>|</div>
                )}
                <Input
                    placeholder={'Digite sua senha'}
                    label={'Senha'}
                    name="password"
                    type={'password'}
                    register={register}
                    outlined={true}
                />
                {errors.password?.message ? (
                    <div className={'text-[red] text-[14px] italic'}>{getErrorMessage(errors.password)}</div>
                ) : (
                    <div className={'invisible'}>|</div>
                )}
            </div>
            <div className={'w-full grid grid-cols-2 gap-2 mt-4'}>
                <Link to={'/register-user'}><Button type={'button'} outlined={true} >Cadastrar</Button></Link>
                <Button type={'submit'}>Entrar</Button>
            </div>
        </form>
    )
}

export default Login
