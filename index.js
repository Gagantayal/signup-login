var express = require('express');
var UserAPI = require('./api/user');
const cors= require('cors')
var app = express();
app.use(cors())
app.use(express.json());
app.use('/',UserAPI);
app.listen(7000, ()=>{console.log('Backend Running')});
























// var path = require('path');
// app.use()
// console.log(UserAPI)
// const http = require('http');
// const port = 4200;
// const server = http.createServer(app);
// console.log('connected')
// app.use('/',function(req,res,next){
//     next(createError(404));
// });
// app.use(function(err,req,res,next){
//     res.locals.message = err.message;
//     res.locals.error = res.app.get('env')==='development' ? err : {};
//     console.log(req)
//     res.status(err.status || 500);
//     res.json({
        
//         error:"page not Found"
//     });
// });