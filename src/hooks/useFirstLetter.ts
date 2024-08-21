const useFirstLetter = () => {
    const firstLetter = (text: string) => text.charAt(0).toUpperCase()

    return { firstLetter }
}

export default useFirstLetter