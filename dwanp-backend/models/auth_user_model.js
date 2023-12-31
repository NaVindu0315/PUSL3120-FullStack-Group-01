const mongoose = require ('mongoose')

const Schema  = mongoose.Schema
const bcrypt =  require('bcrypt')
const validator  = require('validator')

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
    //validation
    if(!email || !password)
    {
        throw Error('All fields must be filled')
    }
    //to check whether the given mail is valid 
    if(!validator.isEmail(email)){
        throw Error ('email is not valud')

    }
    //password check character limit and other
   /* if(!validator.isStrongPassword(password))
    {
        throw Error('passowrd not strong enough')
    }*/


    const exists = await this.findOne({email})
    //checking whether the user is already has account
    if (exists) {
        throw Error('Email Alreday in use')
    }
    //hashing the password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    //here instead of usersignup yt tutrial used user
    const usersignup = await this.create({email,password:hash})

    return usersignup
}

//static login method
/*authusersSchema.statics.login = async function(email,password)
{
     //validation
     if(!email || !password)
     {
         throw Error('All fields must be filled')
     }
     const usersignup = await this.findOne({email})
     //checking whether the user is already has account
     if (!usersignup) {
         throw Error('incorrect email')
     }
    
     //pwd
     const match = await bcrypt.compare(password,usersignup.password)
     //const match = await this.find({password:usersignup.password})
     if(!match)
     {
        throw Error('Incorrect password')
     }
     else
     {
          //  console.log('password matched')
     }
     return 1;

     //return usersignup;
}*/
//bard try
authusersSchema.statics.login = async function (email, password) {
    // Validation
    if (!email || !password) {
      throw new Error('All fields must be filled');
    }
  
    const user = await this.findOne({ email });
  
    // Check for existing user and password match
    if (!user) {
      throw new Error('Incorrect email');
    } else if (!await bcrypt.compare(password, user.password)) {
      throw new Error('Incorrect password');
    }
  
    // Generate a secure authentication token (e.g., using a library like jsonwebtoken)
   // const token = createAuthToken(user); // Replace with your token generation logic
  
    return { status: 'success' }; // Return a meaningful response with the token
  };
  



const authusers = mongoose.model('authusers',authusersSchema);
module.exports = authusers;

