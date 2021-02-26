const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type: String ,
        required : true
    } ,
    phone :{
        type: Number ,
        max : 10000000000 ,
        required : true

    } ,
    email:{
        type: String ,
        validate :{
            validator : function(v){
                return /\w{1,}@[a-z]{1,}\.[a-z]{1,}/.test(v);
            },
            message:"not a correct mail"
        },

        required : true 
    },
    password:{
        type: String ,
        
        validate: {
            validator : function(v){
                if(v.search(/[A-Z]/)==-1){
                    return false ;
                    }
                if(v.search(/[a-z]/)==-1){
                return false ;
                }
                
                if(v.search(/[0-9]/)==-1){
                    return false ;
                    }
                    if(v.search(/\W/)==-1){
                        return false ;
                        }
            },
            message:"Password requires a Number, lower-case alphabets, upper-case alphabet , special character"
        },
        required : true  
    }
}) ;
const user = mongoose.model('User',userSchema);
module.exports=user 