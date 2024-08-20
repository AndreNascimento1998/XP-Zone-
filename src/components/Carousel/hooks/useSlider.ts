import {useState} from "react"

const useSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleNavigationClick = (index: number) => {
        setActiveIndex(index)
    };

    return {
        activeIndex,
        handleNavigationClick
    }
}

export default useSlider