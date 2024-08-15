import {useEffect} from "react";

const useListenerMouseDown = (callBack: (event: MouseEvent) => void) => {
    useEffect(() => {
        document.addEventListener('mousedown', callBack)
        return () => {
            document.removeEventListener('mousedown', callBack)
        }
    }, [callBack])
}

export default useListenerMouseDown