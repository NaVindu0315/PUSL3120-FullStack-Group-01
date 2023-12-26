
const authusers = require('../models/auth_user_model')

//login user
const authloginUser = async (req,res) =>
{
    res.json({msg : 'login user'})
}





///signup user
const authsignupUser = async (req,res) =>
{
    const {email,password} = req.body

    try{
        const usersignup = await authusers.signup(email,password)
        res.status(200).json({email,usersignup})
    } 
    catch(error)
    {
        res.status(400).json({error :  error.message})

    }

    //res.json({msg : 'sign user'})
}


module.exports  = {authloginUser, authsignupUser}