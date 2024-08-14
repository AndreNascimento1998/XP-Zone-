import {useState} from "react"
import IDataForm from "@/types/DataForm.ts"

const useRegisterUser = () => {
    const [step, setStep] = useState(1)
    const [data, setData ] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleFormSubmit = (dataUser: IDataForm, stepCurrent: number) => {
        setData(dataUser)
        setStep(stepCurrent)
    }

    return {
        step,
        data,
        handleFormSubmit
    }
}

export default useRegisterUser