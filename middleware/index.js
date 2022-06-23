const express = require('express');
const app = express();
const port = 3000;

const myLogger = function (req,res,next){
    console.log('Logged');
    next();
};


app.get('/',(req,res)=>{
    res.send('This is runnig in middleware file');
});




app.listen(port,function (req,res){
    console.log('Now it is running ok');
});