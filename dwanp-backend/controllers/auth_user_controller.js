
const authusers = require('../models/auth_user_model')
//importing webtoken package
const jwt = require('jsonwebtoken')

const createToke = (_id) => 
{ 
    //in this the second prmtr is the secret key in tutorial 6 , he uses the sec key in his .env file 
  return  jwt.sign({_id:_id},'kariponnayaumeshumeshkariponnayahirunimagemnhirunige',{expiresIn:'3d'})
} 

//login user
const authloginUser = async (req,res) =>
{
    const {email,password} = req.body
    try{
        const usersignup = await authusers.login(email,password)
        //create a token
        //const token = createToke(usersignup._id)

        res.status(200).json({email,password})
    } 
    catch(error)
    {
        res.status(400).json({error :  error.message})

    }

    
}





///signup user
const authsignupUser = async (req,res) =>
{
    const {email,password} = req.body

    try{
        const usersignup = await authusers.signup(email,password)
        //create a token
      //  const token = createToke(usersignup._id)

        res.status(200).json({email,password})
    } 
    catch(error)
    {
        res.status(400).json({error :  error.message})

    }

    //res.json({msg : 'sign user'})
}


module.exports  = {authloginUser, authsignupUser}