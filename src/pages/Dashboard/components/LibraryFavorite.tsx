import Card from "@/components/Card/Card.tsx";

const LibraryFavorite = () => {
    return (
        <div>
            <Card>
                <div className={'flex flex-col max-h-[500px] overflow-y-auto overflow-x-hidden p-1 gap-4 font-oxanium'}>
                    <span className={'uppercase font-bold bg-btn-primary bg-clip-text text-transparent'}>Favoritos</span>
                    <div className={'flex w-[300px] justify-between py-4 px-2 border-[2px] rounded-[5px]'}>
                        <div className={'flex gap-1'}>
                            <div className={''}>platform</div>
                            <div className={''}>game</div>
                        </div>
                        <div>s2</div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default LibraryFavorite
