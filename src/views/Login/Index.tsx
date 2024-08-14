import Logo from "@/assets/Icons/Logo/Logo.tsx"
import Form from "@/pages/Login/FormLogin.tsx"
import {Link} from "react-router-dom";
import ArrowToBack from "@/assets/Icons/Others/ArrowToBack.tsx";

const Login = () => {

    return (
        <div className={'bg-primary h-[100vh] px-4 py-10'}>
            <Link to={'/landing-page'}><ArrowToBack /></Link>
            <div className={'h-full flex flex-col gap-8 items-center'}>
                <div className={'flex flex-col gap-5 items-center text-[white]'}>
                    <Logo />
                    <div className={'flex flex-col items-center gap-1'}>
                        <span className={'font-bolder text-[24px]'}>Já possui uma conta?</span>
                        <span className={'text-[18px] font-light'}>Faça o seu login e acesse o sistema</span>
                        <span className={'text-[18px] font-light'}>Acesse com seu e-mail</span>
                    </div>
                </div>
                <Form />
            </div>
        </div>
    )
}

export default Login
