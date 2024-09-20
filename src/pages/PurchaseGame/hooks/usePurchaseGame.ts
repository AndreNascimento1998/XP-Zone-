import {useParams} from "react-router-dom";
import {useContext, useState} from "react";
import UsersContext from "@/context/UsersContext/UsersContext.ts";

const usePurchaseGame = () => {
    const { getGamesById } = useContext(UsersContext)
    const { id } = useParams<{id: string}>()
    const [ game ] = useState(getGamesById(parseInt(id)))

    const purchase = () => {
        console.log(game)
    }

    return { game, purchase }
}

export default usePurchaseGame
