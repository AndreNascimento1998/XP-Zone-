import Card from "@/components/Card/Card";
import Button from "@/components/Button/Button.tsx";

interface CardRulesProps {
    title: string
    description: string
    buttonText: string
    onClick?: () => void
}

const CardRules = ({title, description, buttonText, onClick}: CardRulesProps) => {

    return (
        <div className={'border-[2px] border-[white] rounded-[10px]'}>
            <Card>
                <div className={'flex flex-col gap-4'}>
                    <span
                        className={'font-oxanium font-bold bg-btn-primary bg-clip-text text-transparent text-[22px] lg:text-[32px]'}>{ title }</span>
                    <span className={'text-[18px]'}>{ description }</span>
                    <div>
                        <Button onClick={onClick} >{ buttonText }</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CardRules
