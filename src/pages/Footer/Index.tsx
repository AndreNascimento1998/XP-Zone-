import bg3 from '@/assets/images/games/bg.png'

const Footer = () => {
    return (
        <div className={'relative bg-[#2F0C66]'}>
            <img className={'w-full h-[300px] object-cover'} src={bg3} alt={''} />
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
                        <span className={'font-bold hover:text-[#ccc]'}>Empresa</span>
                        <span className={'hover:text-[#ccc]'}>Sobre</span>
                        <span className={'hover:text-[#ccc]'}>Empregos</span>
                        <span className={'hover:text-[#ccc]'}>Marca</span>
                        <span className={'hover:text-[#ccc]'}>Sala de imprensa</span>
                    </div>
                    <div className={'flex cursor-pointer flex-col gap-4'}>
                        <span className={'hover:text-[#ccc] font-bold'}>Recursos</span>
                        <span className={'hover:text-[#ccc]'}>Suporte</span>
                        <span className={'hover:text-[#ccc]'}>Segurança</span>
                        <span className={'hover:text-[#ccc]'}>Blog </span>
                        <span className={'hover:text-[#ccc]'}>Comunidade</span>
                    </div>
                    <div className={'flex cursor-pointer flex-col gap-4'}>
                        <span className={'hover:text-[#ccc] font-bold'}>Política</span>
                        <span className={'hover:text-[#ccc]'}>Termos</span>
                        <span className={'hover:text-[#ccc]'}>Privacidade</span>
                        <span className={'hover:text-[#ccc]'}>Cookies</span>
                        <span className={'hover:text-[#ccc]'}>Moderação</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
