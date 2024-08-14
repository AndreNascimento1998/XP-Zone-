import Input from "@/components/Input/Index.tsx"
import Button from "@/components/Button/Index.tsx"
import useRegisterForm from "@/pages/Login/hooks/useFormRegister.ts"
import IDataForm from "@/types/DataForm.ts"

interface FormProps {
    onSubmit: (data: IDataForm, step: number) => void
}
const Login = ({ onSubmit }: FormProps) => {
    const {
        handleSubmit,
        register,
        errors,
        getErrorMessage,
        handleSubmitForm
    } = useRegisterForm(onSubmit)

    return (
        <>
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
        </>
    )
}

export default Login