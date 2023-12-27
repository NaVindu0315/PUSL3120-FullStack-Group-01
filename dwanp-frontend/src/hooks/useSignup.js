import { useState } from "react";
import { AuthContext } from "../context-auth/AuthContext";
import { useauthcontext } from "./useAuthContext";

 export const useSignup = () =>
 {
    const [error,setError] = useState(null)
    const [isloading,setisloading] = useState(null)
 }