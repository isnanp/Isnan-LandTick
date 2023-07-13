import { createContext, useReducer } from "react";

export const UserContext = createContext()

const initialState = {
    isLogin : false,
    status : false,
    user : ""
}

const reducer = ( state, action ) => {
    const { type, payload} = action;

    switch ( type ) {
        case 'LOGIN_ADMIN_SUCCESS':
            return {
                isLogin : true,
                status : true,
                user : "Admin",
            }
        case 'LOGIN_USER_SUCCESS':
            return {
                isLogin : true,
                status : false,
                user   : payload,
            }
        case 'LOGOUT' :
            return {
                isLogin : false,
                status : false,
                user : ""
            }
        default :
            throw new Error()
    }
}

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UserContext.Provider value={[state, dispatch]}>
        {children} 
        </UserContext.Provider>
    )
}