import bg3 from '@/assets/images/games/bg.png'

const Footer = () => {
    return (
        <div className={'relative bg-[#2F0C66]'}>
            <img className={'w-full h-[400px] lg:h-full object-cover'} src={bg3} alt={''} />
            <div className={'absolute p-4 lg:p-9 w-full h-full top-0'}>
                <div className={'flex text-[14px] lg:text-[20px] text-[white] font-light justify-around flex-wrap'}>
                    <div className={'flex flex-col items-center gap-1 mb-10 lg:mb-0'}>
                        <span
                            className={
                                'font-oxanium font-bold bg-btn-primary bg-clip-text text-transparent text-[22px] lg:text-[32px]'
                            }
                        >
                            Um lugar para jogadores
                        </span>
                        <span className={'text-[12px] lg:text-[14px]'}>Português do Brasil</span>
                    </div>
                    <div className={'flex cursor-pointer flex-col gap-4'}>
                        <span className={'font-bold'}>Empresa</span>
                        <span>Sobre</span>
                        <span>Empregos</span>
                        <span>Marca</span>
                        <span>Sala de imprensa</span>
                    </div>
                    <div className={'flex cursor-pointer flex-col gap-4'}>
                        <span className={'font-bold'}>Recursos</span>
                        <span>Suporte</span>
                        <span>Segurança</span>
                        <span>Blog </span>
                        <span>Comunidade</span>
                    </div>
                    <div className={'flex cursor-pointer flex-col gap-4'}>
                        <span className={'font-bold'}>Política</span>
                        <span>Termos</span>
                        <span>Privacidade</span>
                        <span>Cookies</span>
                        <span>Moderação</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
