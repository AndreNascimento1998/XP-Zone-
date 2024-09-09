import User from '@/types/User.ts'
import Card from '@/components/Card/Card.tsx'

interface cardProfileProps {
    user: User
}

const CardProfile = ({ user }: cardProfileProps) => {
    return (
        <div className={'border-2 border-white rounded-[10px]'}>
            <Card>
                <div className={'grid grid-cols-6 text-[18px]'}>
                    <div className={'col-span-4 flex flex-col gap-4'}>
                        <div>COLOCAR ALGUMA COISA</div>
                        <div>{user.name}</div>
                        <div
                            className={'font-oxanium font-bold bg-btn-primary bg-clip-text text-transparent uppercase'}
                        >
                            ouro
                        </div>
                    </div>
                    <div>COLOCAR ALGUMA COISA</div>
                </div>
            </Card>
        </div>
    )
}

export default CardProfile
