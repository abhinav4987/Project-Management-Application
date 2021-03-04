const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/company_list');
const db = mongoose.connection ;
db.on('error' ,  function(err) {console.log(err +"***") } );
db.once('open',function(){
    console.log("connected"); 
})