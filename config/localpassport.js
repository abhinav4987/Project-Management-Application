const passport = require('passport');
const User = require('../model/user')
const localStrategey = require ('passport-local').Strategy ;
passport.use(new localStrategey({
    usernameField: 'email'
},
function(email,password,done){
    User.findOne({email:email},function(err,user){
        if(err){
            // console.log(err);
            return done(err);
        }
        if(!user || user.password!=password){
            return done(null,false);
        }
        return done(null,user);
    });
}
)) ;
    
 passport.serializeUser(function(user,done){
     done(null,user.id)
 }) ;
 passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
             console.log(err);
        }
        return done(null,user);
    }) ;

});


 
 passport.checkAuthentication = function(req,res,next){
     if(req.isAuthenticated()){
        //  console.log(req)
         return next();
     }
     return res.redirect("/");
 }
 
module.exports = passport ;
