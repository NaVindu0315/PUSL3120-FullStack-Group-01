const mongoose = require ('mongoose')

const Schema  = mongoose.Schema
const bcrypt =  require('bcrypt')

const authusersSchema  = new Schema (
    {
        email :
        {
            type :String,
            required :true,
            unique : true
        },
        password :
        {
            type:String,
            required :true
        }
    }
)

//creating a static sign upmethod 

authusersSchema.statics.signup = async function(email,password) 
{   
    const exists = await this.findOne({email})
    //checking whether the user is already has account
    if (exists) {
        throw Error('Email Alreday in use')
    }
    //hashing the password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    //here instead of usersignup yt tutrial used user
    const usersignup = await this.create({email,password :hash})

    return usersignup






}


const authusers = mongoose.model('authusers',authusersSchema);
module.exports = authusers;

