import Logo from "@/assets/Icons/Logo/Logo"
import FormRegister from "@/pages/Login/FormRegister"
import ArrowToBack from "@/assets/Icons/Others/ArrowToBack"
import { Link } from "react-router-dom"
import ConfirmRegister from "@/pages/Login/ConfirmRegister.tsx"
import useRegisterUser from "../hooks/useRegisterUser.ts"
const Login = () => {
  const {
      step,
      data,
      handleFormSubmit
  } = useRegisterUser()

    return (
        <div className={'bg-primary h-[100vh] py-10 px-4'}>
            {step === 1 ? (
                <>
                    <Link to={'/login'}><ArrowToBack /></Link>
                    <div className={'h-full flex flex-col gap-8 items-center'}>
                        <div className={'flex flex-col gap-5 items-center text-[white]'}>
                            <Logo />
                            <div className={'flex flex-col gap-1 items-center'}>
                                <span className={'font-bolder text-[24px]'}>Cadastre-se</span>
                                <span className={'text-[18px] font-light'}>Cadastra-se agora com seu e-mail</span>
                            </div>
                        </div>
                        <FormRegister onSubmit={handleFormSubmit} />
                    </div>
                </>
            ) :
                <>
                    <div className={'h-full flex flex-col gap-8 items-center py-6'}>
                        <div className={'flex flex-col gap-5 items-center text-[white]'}>
                            <Logo />
                            <div className={'flex flex-col gap-1 items-center'}>
                                <span className={'font-bolder text-[24px]'}>USUÁRIO CADASTRADO</span>
                            </div>
                        </div>
                        <div><ConfirmRegister name={data?.name} email={data?.email} /></div>
                    </div>
                </>
            }
        </div>
    )
}

export default Login