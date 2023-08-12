import { createContext, useContext, useState } from "react"

const AuthContext = createContext()


export function useAuth() {
    return useContext(AuthContext)
}

// eslint-disable-next-line react/prop-types
export function AuthProvider({children}) {
    const [auth, setAuth] = useState(
        {
            login       : Boolean(JSON.parse(localStorage.getItem('login'))),
            accessToken : localStorage.getItem('access_token')
        })
    return (
        <AuthContext.Provider value={{auth,setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}