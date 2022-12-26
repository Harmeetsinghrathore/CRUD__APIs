const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    f_name : {
        type : String, 
        required : false
    },
    username : {
        type : String, 
        required : false
    },
    email : {
        type : String, 
        required : false
    },
    password : {
        type : String, 
        required : false
    },
    phone : {
        type : String, 
        required : false
    },
    is_admin : {
        type : Boolean,
        required : false,
        default : 0
    },
    is_subscribed : {
        type : Boolean,
        required : false,
        default : 0
    }
});

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")){
        next();
    }

    this.password = bcrypt.hash(this.password, 10);

})



module.exports = new mongoose.model('User', userSchema); 

