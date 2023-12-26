import { AuthContext } from "../context-auth/AuthContext";
import { useContext } from "react";

export const useauthcontext = () =>
{
        const context = useContext(AuthContext)
        if (!context)
        {
            throw Error('ueauthcontext must be inside and authe context providder')
        }
     return context
}