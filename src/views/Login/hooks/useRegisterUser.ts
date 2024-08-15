import {useState} from "react"
import IDataForm from "@/types/DataForm.ts"
import eldenRing from "@/assets/images/register/elden-ring.jpg"
import rd2 from "@/assets/images/register/rd2.jpg"
import forza from "@/assets/images/register/forza.jpg"
import mk from "@/assets/images/register/mk.jpg"
import starWars from "@/assets/images/register/star-wars.jpg"
import bloodborn from "@/assets/images/register/bloodborn.jpg"

const useRegisterUser = () => {
    const [step, setStep] = useState(1)
    const images = [eldenRing,rd2, forza, mk, starWars, bloodborn ]
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
        images,
        handleFormSubmit
    }
}

export default useRegisterUser