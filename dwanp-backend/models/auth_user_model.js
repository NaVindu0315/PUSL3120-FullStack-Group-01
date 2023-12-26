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
const authusers = mongoose.model('authusers',authusersSchema);
module.exports = authusers;

