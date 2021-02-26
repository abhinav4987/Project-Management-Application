const express =  require('express');

const port = 8000 ;
const app = express() ;
const db =  require('./config/mongoose');
const passport =  require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
 const localStrategey = require('./config/localpassport');
 const googleStratagy = require('./config/googlepassport') ;
app.use(express.urlencoded());
app.use(session({
    name:'memberentry',
    secret:'blahsomething',
    saveUninitialized:false ,
    resave:false ,
    cookie:{
        maxAge:(1000*60*100)
    }
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser())
app.set('view engine','ejs');
app.set('views','./views');
app.use('/',require('./router')) ;

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});