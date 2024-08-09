import Input from "@/components/Input/Index.tsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "@/components/Button/Index.tsx";

const schema = z.object({
    email: z.string().min(1, 'Campo obrigatório'),
    password: z.string().min(8, 'Campo deve conter no mínimo 8 caracteres')
});

const Login = () => {
    const { handleSubmit, register, formState: { errors } } = useForm({
        mode: 'all',
        criteriaMode: 'all',
        resolver: zodResolver(schema)
    });

    const handleSubmitForm = (data: any) => {
        console.log(data);
    };

    const registerUser = () => {
        console.log('register');
    }

    return (
        <form onSubmit={handleSubmit(handleSubmitForm)} className={'w-full flex flex-col gap-2'}>
            <div className={'w-full flex flex-col gap-2'}>
                <Input
                    placeholder={'Digite seu e-mail'}
                    error={errors?.email?.message}
                    label={'Email'}
                    name="email"
                    register={register}
                    outlined={true}
                />
                {errors.email?.message ? (
                    <div className={'text-[red] text-[14px] italic'}>{errors.email?.message}</div>
                ) : (
                    <div className={'invisible'}>|</div>
                )}
                <Input
                    placeholder={'Digite seu senha'}
                    error={errors?.email?.message}
                    label={'Senha'}
                    name="password"
                    register={register}
                    outlined={true}
                />
                {errors.password?.message ? (
                    <div className={'text-[red] text-[14px] italic'}>{errors.password?.message}</div>
                ) : (
                    <div className={'invisible'}>|</div>
                )}
            </div>
            <div className={'w-full grid grid-cols-2 gap-2'}>
                <Button onClick={registerUser} type={'button'} outlined={true} >Cadastrar</Button>
                <Button type={'submit'}>Entrar</Button>
            </div>
        </form>
    );
};

export default Login;
