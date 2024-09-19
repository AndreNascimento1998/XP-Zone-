import Card from '@/components/Card/Card'
import Button from '@/components/Button/Button.tsx'
import Modal from "@/components/Modal/Modal.tsx";
import {useState} from "react";

interface CardRulesProps {
    title: string
    description: string
    buttonText: string
}

const CardRules = ({ title, description, buttonText }: CardRulesProps) => {
    const [openModal, setOpenModal] = useState(false)

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    return (
        <div className={'border-[2px] border-[white] rounded-[10px]'}>
            <Modal openModal={openModal} onClickClose={handleCloseModal} >
                <Card>
                    <div className={'font-oxanium font-bold bg-btn-primary bg-clip-text text-transparent text-[22px]'}>
                        Todos os jogos estarão disponíveis para compra, são 3 contas e
                        tem interação de compra de jogos entre as contas já cadastradas.
                    </div>
                    <br />
                    <div className={'font-oxanium font-bold bg-btn-primary bg-clip-text text-transparent text-[22px]'}>
                        Procure a interação entre as contas e favoritar, o intuito é ter o
                        mínimo de interação com meu banco de dados, no quesito salvar e deletar.
                    </div>
                </Card>
            </Modal>
            <Card>
                <div className={'flex flex-col gap-4'}>
                    <span
                        className={
                            'font-oxanium font-bold bg-btn-primary bg-clip-text text-transparent text-[22px] lg:text-[32px]'
                        }
                    >
                        {title}
                    </span>
                    <span className={'text-[18px]'}>{description}</span>
                    <div>
                        <Button onClick={() => setOpenModal(true)}>{buttonText}</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CardRules
