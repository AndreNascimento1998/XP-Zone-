import Input from "@/components/Input/Index.tsx"
import {FieldError, useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Button from "@/components/Button/Index.tsx"
import IDataForm from "@/types/DataForm.ts";

const schema = z.object({
    name: z.string().min(3, 'Nome deve conter no mínimo 3 caracteres'),
    email: z.string().min(1, 'Campo obrigatório'),
    password: z.string().min(8, 'Senha deve conter no mínimo 8 caracteres'),
    confirmPassword: z.string()
        }).refine(data => data.password === data.confirmPassword, {
        message: 'As senhas devem ser iguais',
        path: ['confirmPassword']
})


interface FormProps {
    onSubmit: (data: IDataForm, step: number) => void
}
const Login = ({onSubmit}: FormProps ) => {
    const { handleSubmit, register, formState: { errors } } = useForm({
        mode: 'all',
        criteriaMode: 'all',
        resolver: zodResolver(schema)
    })
    const getErrorMessage = (error: FieldError | undefined): string | null => {
        return error?.message || null
    }

    const handleSubmitForm = (data: IDataForm) => {
        const step = 2
        onSubmit(data, step)
    }

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)} className={'w-full flex flex-col gap-2'}>
            <div className={'w-full flex flex-col gap-2'}>
                <Input
                    placeholder={'Digite nome'}
                    label={'Nome Completo'}
                    name="name"
                    type={'text'}
                    register={register}
                    outlined={true}
                />
                {errors.name?.message ? (
                    <div className={'text-[red] text-[14px] italic'}>{getErrorMessage(errors.name)}</div>
                ) : (
                    <div className={'invisible'}>|</div>
                )}

                <Input
                    placeholder={'Digite seu e-mail'}
                    label={'E-mail'}
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

                <div className={'flex gap-2'}>
                    <div className={'w-full'}>
                        <Input
                            placeholder={'Senha'}
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

                    <div className={'w-full'}>
                        <Input
                            placeholder={'Confirmação'}
                            label={'Confirme a senha'}
                            name="confirmPassword"
                            type={'password'}
                            register={register}
                            outlined={true}
                        />
                        {errors.confirmPassword?.message ? (
                            <div className={'text-[red] text-[14px] italic'}>{getErrorMessage(errors.confirmPassword)}</div>
                        ) : (
                            <div className={'invisible'}>|</div>
                        )}
                    </div>
                </div>
            </div>
            <div className={'w-full grid gap-2 mt-4'}>
                <Button type={'submit'}>Criar conta</Button>
            </div>
        </form>
    )
}

export default Login
