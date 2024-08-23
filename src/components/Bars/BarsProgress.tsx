interface BarsProgressProps {
    children?: React.ReactNode
    percentage: number
}

const BarsProgress = ({ children, percentage = 0 }: BarsProgressProps) => {
    return (
        <div className="bg-[#928C9C] rounded-full w-full">
            <div className="relative bg-btn-primary rounded-full  h-[8px]" style={{ width: `${percentage}%` }}>
                <div className="absolute right-[-6px] bottom-3 h-[6px] w-[16px]">{children}</div>
            </div>
        </div>
    )
}

export default BarsProgress
