import Logo from '@/assets/Icons/Logo/Logo.tsx'
import FormLogin from '@/pages/Login/components/FormLogin.tsx'
import { Link } from 'react-router-dom'
import ArrowToBackIcon from '@/assets/Icons/Others/ArrowToBackIcon.tsx'
import ClosePageIcon from '@/assets/Icons/Others/ClosePageIcon.tsx'

const Login = () => {
    return (
        <div className={'h-[100vh] rounded-none lg:rounded-[20px] lg:h-full px-4 py-10 lg:px-10'}>
            <div className={'flex justify-between lg:hidden'}>
                <Link to={'/landing-page'}>
                    <ArrowToBackIcon />
                </Link>
                <Link to={'/landing-page'}>
                    <ClosePageIcon />
                </Link>
            </div>
            <div className={'h-full flex flex-col gap-8 items-center'}>
                <div className={'flex flex-col gap-5 items-center text-[white]'}>
                    <Logo />
                    <div className={'flex flex-col items-center gap-1'}>
                        <span className={'font-bolder text-[24px]'}>Já possui uma conta?</span>
                        <span className={'text-[18px] font-light'}>Faça o seu login e acesse o sistema</span>
                        <span className={'text-[18px] font-light'}>Acesse com seu e-mail</span>
                    </div>
                </div>
                <FormLogin />
            </div>
        </div>
    )
}

export default Login
