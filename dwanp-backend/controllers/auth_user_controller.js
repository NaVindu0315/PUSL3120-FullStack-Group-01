//login user
const authloginUser = async (req,res) =>
{
    res.json({msg : 'login user'})
}





///signup user
const authsignupUser = async (req,res) =>
{
    res.json({msg : 'sign user'})
}


module.exports  = {authloginUser, authsignupUser}