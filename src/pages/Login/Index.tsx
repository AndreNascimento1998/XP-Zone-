import Logo from "@/assets/Icons/Logo/Logo.tsx";
import Input from "@/components/Input.tsx";


const Login = () => {

    return (
        <div className={'bg-[#210948] h-[100vh]'}>
            <div className={'h-full flex flex-col gap-8 items-center px-4 py-8'}>
                <div><Logo /></div>
                <div className={'w-full flex flex-col gap-2'}>
                    <Input placeholder={'Digite seu e-mail'} rules={'mingLength'} label={'Email'} outlined={true} />
                    <Input placeholder={'Digite seu e-mail'} rules={'required'} label={'Email'} outlined={true} />
                </div>
                <div>Botão de ação</div>
            </div>
        </div>
    )
}

export default Login