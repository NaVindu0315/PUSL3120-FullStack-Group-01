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


}


const authusers = mongoose.model('authusers',authusersSchema);
module.exports = authusers;

