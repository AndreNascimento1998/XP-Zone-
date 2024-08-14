import {Link} from "react-router-dom"
import Button from "@/components/Button/Button.tsx"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import useNotification from "@/hooks/useNotification.ts";

interface ConfirmRegisterProps {
    name: string
    email: string
}

const ConfirmRegister = ({ name, email }: ConfirmRegisterProps) => {
    useNotification({message: 'Usuário cadastrado com sucesso.', type:'messageSuccess'})

    return (
        <>
            <div className={'text-[white] text-[18px]'}>
                <span>
                    O usuário <span className={'font-bold text-[20px]'}> { name } </span>
                    com e-mail <span className={'font-bold text-[20px]'}> { email } </span>
                    foi cadastrado com sucesso.
                </span>
                <div className={'font-bold py-4'}>
                    IMPORTANTE: O cadastro é meramente
                    ilustrativo, utilize as contas "cadastradas" para interagir com as funcionalidades entre elas.
                </div>
                <Link to={'/login'}><Button >Retornar ao login</Button> </Link>
            </div>
            <ToastContainer />
        </>
    )
}

export default ConfirmRegister