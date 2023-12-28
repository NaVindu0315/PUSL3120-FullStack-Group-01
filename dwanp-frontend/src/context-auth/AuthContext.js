import {createContext,useReducer} from 'react'

export const AuthContext = createContext()

export const authReducer = (state,action) =>
{
    switch (action.type)
    {
        case 'LOGIN':
            return {usersignup : action .payload }
        case 'LOGOUT':
            return { usersignup :null}
        default :
            return state
    }
}


export const AuthContextProvider   = ({children}) =>
{
    const  [state,dispatch] = useReducer(authReducer,{
        //might be signupuser as i used signupuser in the backend 
        usersignup:null
    })

    console.log('authcontext state : ',state)

    return (
        <AuthContext.Provider  value= {{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}