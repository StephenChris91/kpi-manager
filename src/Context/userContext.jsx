import { createContext } from 'react'
import { auth } from '../Firebase/Config'
const userContext = createContext({})

const user = auth.currentUser

export const UserContextProvider = ( { children } ) => {
    return <userContext.Provider value={user}>
        {children }
    </userContext.Provider>
}