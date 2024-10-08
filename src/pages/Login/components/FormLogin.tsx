import Input from '@/components/Input/Input'
import Button from '@/components/Button/Button'
import { Link } from 'react-router-dom'
import useFormLogin from '@/pages/Login/components/hooks/useFormLogin'
import { FieldError } from 'react-hook-form'
import { ToastContainer } from 'react-toastify'

const Login = () => {
    const { handleSubmit, register, errors, getErrorMessage, handleSubmitForm } = useFormLogin()

    return (
        <>
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
                        <div className={'text-[red] text-[14px] italic'}>
                            {getErrorMessage(errors.email as FieldError)}
                        </div>
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
                        <div className={'text-[red] text-[14px] italic'}>
                            {getErrorMessage(errors.password as FieldError)}
                        </div>
                    ) : (
                        <div className={'invisible'}>|</div>
                    )}
                </div>
                <div className={'w-full grid grid-cols-2 lg:grid-cols-1 gap-2 mt-4'}>
                    <Link className={'block lg:hidden'} to={'/register-user'}>
                        <Button type={'button'} outlined={true}>
                            Cadastrar
                        </Button>
                    </Link>
                    <Button type={'submit'}>Entrar</Button>
                </div>
            </form>
            <ToastContainer />
        </>
    )
}

export default Login
