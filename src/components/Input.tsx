import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"
import {useMemo} from "react";

const schema = z.object({
    mingLength: z.string().min(3, 'Informe um valor válido'),
    required: z.string().min(1, 'Campo obrigatório')
})

const Input = (props: any) => {
    const { handleSubmit, register, formState: {errors} } = useForm({
        mode: 'all',
        criteriaMode: 'all',
        resolver: zodResolver(schema)
    })

    const returnError = useMemo(() => {
        if (errors && errors[props.rules]?.message) {
            return errors[props.rules]?.message;
        }
        return null;
    }, [errors, props.rules]);

    const handleSubmitForm = (data: any) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)} className={'w-full flex flex-col gap-2'}>
            <label className={'text-[#fff] font-light'}>{props.label}</label>
            <input
                {...register(props.rules)}
                className={
                    `px-2 py-3 rounded-[6px] w-full 
                    ${props.outlined ? 'text-[white] border-[1px] border-[white] bg-transparent' : ''}`
                }
                placeholder={props.placeholder}
            />
            {errors[props.rules] ? (
                    <div className={'text-[red] text-[14px] italic'}>{ returnError }</div>
                ) : (
                    <div className={'invisible'}>|</div>
                )
            }
        </form>
    );
};

export default Input;
