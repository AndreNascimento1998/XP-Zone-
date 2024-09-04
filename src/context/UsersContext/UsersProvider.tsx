import UsersContext from './UsersContext.tsx'
import {useState} from "react";

const UsersProvider = ({ children }) => {
    const [name, setName] = useState('André')

    return (
        <UsersContext.Provider value={{name, setName}}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersProvider
