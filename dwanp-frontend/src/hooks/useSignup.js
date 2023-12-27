import { useState } from "react";
import { AuthContext } from "../context-auth/AuthContext";
import { useauthcontext } from "./useAuthContext";

 export const useSignup = () =>
 {
    const [error,setError] = useState(null)
    const [isloading,setisloading] = useState(null)
    const {dispatch} = useauthcontext()

    const signup  = async (email,password) =>
    {
        setisloading(true)
        setError(null)

        //here he uses  ('api/user/signup')
        //this is the backend url api/user/usersignup
        //front end should be http://localhost:3000/userreg
        const response = await fetch('api/user/usersignup',{
            method : 'POST',
            headers : {'Content-Type':'application/json'},
            body : JSON.stringify({email,password})
        })

        const json =  await response.json()
        if (!response.ok)
        {
            setisloading(false)
            setError(json.error)
        }
        if(response.ok)
        {
            //saving the user to local storage 
            localStorage,setItem('user',JSON.stringify(json))

            //update the authcontext

        }
    }
 }