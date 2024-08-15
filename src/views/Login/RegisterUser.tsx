import Logo from "@/assets/Icons/Logo/Logo"
import FormRegister from "@/pages/Login/FormRegister"
import ArrowToBackIcon from "@/assets/Icons/Others/ArrowToBackIcon"
import { Link } from "react-router-dom"
import ConfirmRegister from "@/views/Login/ConfirmRegister.tsx"
import useRegisterUser from "./hooks/useRegisterUser.ts"
import ClosePageIcon from "@/assets/Icons/Others/ClosePageIcon.tsx"
import imageRegister from "@/assets/images/register/register-image.png"
import '@/views/Login/styles/RegisterUser.scss'
const Login = () => {
  const {
      step,
      data,
      images,
      handleFormSubmit
  } = useRegisterUser()

    return (
        <div className={'bg-primary'}>
            <img className={'absolute w-full h-full overflow-hidden object-cover'} src={imageRegister} alt={'Imagem de registro'}/>
            <div className={'h-[100vh] relative py-10 px-4 lg:px-10'}>
                {step === 1 ? (
                        <div className={'block gap-20 lg:grid lg:grid-cols-2'}>
                            <div>
                                <div className={'flex lg:hidden justify-between'}>
                                    <Link to={'/login'}><ArrowToBackIcon/></Link>
                                    <Link to={'/landing-page'}><ClosePageIcon/></Link>
                                </div>
                                <div className={'h-full flex flex-col gap-8 items-center'}>
                                    <div className={'flex flex-col gap-5 items-center text-[white]'}>
                                        <Logo/>
                                        <div className={'flex flex-col gap-1 items-center'}>
                                            <span className={'font-bolder text-[24px]'}>Cadastre-se</span>
                                            <span className={'text-[18px] font-light'}>Cadastra-se agora com seu e-mail</span>
                                        </div>
                                    </div>
                                    <FormRegister onSubmit={handleFormSubmit}/>
                                </div>
                            </div>
                            <div className={'hidden lg:flex flex-col h-full w-full items-center'}>
                                <div className={'flex flex-col items-center bg-btn-primary bg-clip-text font-oxanium text-transparent'}>
                                    <span className={'text-[24px]'}>Anúncie seus</span>
                                    <span className={'text-[40px] font-bold'}>JOGOS</span>
                                </div>
                                <div className={'flex gap-2 flex-wrap justify-center'}>
                                    {images && images.map((image, index) => (
                                        <img key={index} className={'rounded-[10px] display-image'} src={image}
                                             alt={'Elden ring'}/>
                                    ))}
                                </div>
                            </div>
                        </div>

                    ) :
                    <>
                        <div className={'h-full flex flex-col gap-8 items-center py-6'}>
                            <div className={'flex flex-col gap-5 items-center text-[white]'}>
                                <Logo/>
                                <div className={'flex flex-col gap-1 items-center'}>
                                    <span className={'font-bolder text-[24px]'}>USUÁRIO CADASTRADO</span>
                                </div>
                            </div>
                            <div><ConfirmRegister name={data?.name} email={data?.email}/></div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Login