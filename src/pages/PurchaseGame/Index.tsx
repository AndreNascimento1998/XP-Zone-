import Card from "@/components/Card/Card.tsx";
import usePurchaseGame from "./hooks/usePurchaseGame.ts";
import Button from "@/components/Button/Button.tsx";
import usePlatformEnum from "@/hooks/usePlatformEnum.ts";
import useImages from "../../hooks/useImages.ts";

const PurchaseGame = () => {
    const { platformName } = usePlatformEnum()
    const { images } = useImages()
    const { game, purchase } = usePurchaseGame()

    return (
        <div className={'w-fit'}>
            <Card>
                <div className={'flex flex-col justify-center gap-4'}>
                    <div>
                        { game.name }
                    </div>
                    <div>
                        <img src={images[game.src]} alt={game.name} />
                    </div>
                    <div>
                        { platformName[game.platform] }
                    </div>
                    <div className={'flex'}>
                        <Button onClick={purchase}>Comprar</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default PurchaseGame
