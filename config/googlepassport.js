const passport = require('passport');
const googleStratagy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../model/user');
passport.use(new googleStratagy({
    clientID:"6487585504-auh4149gkorbtg3qpkg8nqdbn014fv4j.apps.googleusercontent.com" ,
    clientSecret:"s5d-_Zi-uYlh5Wo_cn0JLrGR",
    callbackURL:"http://localhost:8000/auth/google/callback"
},
function(accessToken , refreshToken ,profile , done){
  User.findOne({email:profile.emails[0].value} , function(err,user){
      if(err){
          console.log(err);
          return ;
      }
      console.log(accessToken, refreshToken);
            console.log(profile);
      if(user){
          return done(null,user);
      }else{
          User.create({
              name:profile.displayName ,
              phone:8826232987 ,
              email:profile.emails[0].value,
              password:crypto.randomBytes(20).toString('hex')+"P@"
          },function(err,user){
              if(err){
                  console.log(err)
              }
              return done(null,user);
          })
      }
  })
}

))
module.exports=passport ;