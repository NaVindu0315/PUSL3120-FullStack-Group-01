const mongoose = require ('mongoose')

const Schema  = mongoose.Schema

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

authusersSchema.statics.signup = async(email,password) =>
{   
    const exists = await this.findOne({email})
    //checking whether the user is already has account
    if (exists) {
        throw Error('Email Alreday in use')
    }




}


const authusers = mongoose.model('authusers',authusersSchema);
module.exports = authusers;

