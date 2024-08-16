interface CardProps {
    children: React.ReactNode
}

const Card = ({children}: CardProps) => {
    return (
        <div className="bg-card w-full p-6 rounded-[10px]">
            {children}
        </div>
    )
}

export  default Card