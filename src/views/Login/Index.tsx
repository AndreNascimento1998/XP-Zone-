import Logo from "@/assets/Icons/Logo/Logo.tsx";
import Form from "@/pages/Login/Form.tsx";
const Login = () => {

    return (
        <div className={'bg-[#210948] h-[100vh] py-20'}>
            <div className={'h-full flex flex-col gap-8 items-center px-4'}>
                <div className={'flex flex-col gap-2 items-center text-[white]'}>
                    <Logo/>
                    <span className={'font-bolder text-[24px]'}>Já possui uma conta?</span>
                    <span className={'text-[18px] font-light'}>Faça o seu login e acesse o sistema</span>
                    <span className={'text-[18px] font-light'}>Acesse com seu e-mail</span>
                </div>
                <div><Form /></div>
            </div>
        </div>
    );
};

export default Login;
