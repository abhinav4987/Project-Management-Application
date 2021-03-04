
const { validate } = require('../model/user');
const User = require('../model/user');
module.exports.sign_in=function(req,res){
    return res.render('signin')
}
module.exports.create=function(req,res){
    User.findOne({email:req.body.email },
        function(err,data){
            if(data){
                return res.render('sign',{
                    err : "Email exsist"
                   });
                
            }
        
 User.create ({
    name:req.body.name ,
    phone:req.body.phone ,
    email:req.body.email ,
    password:req.body.password ,
},function(err,user){
     if(err){
     console.log(err.message.substring(22));
    return res.render('sign',{
        err : err.message
       });
     }
    console.log(user);
    return res.redirect('/sign-in');
}) ;
    
}) ;
}
module.exports.sign_up= function(req,res){
    return res.render('sign',{
     err : ""
    });
 }
 module.exports.create_session = function(req,res){
     return res.redirect('/home');
 }
 module.exports.home = function(req,res){
    User.findById(req.user._id,function(err,user){
        if(err){
            console.log(err);
        }
        return res.render('home',{
            member:user 
        })
    }) ;
     
 }
 module.exports.destroy=function(req,res){
     req.logout();
     return res.redirect('/sign-in')
 }
 module.exports.google_create=function(req,res){
     return res.redirect('/home');
 }