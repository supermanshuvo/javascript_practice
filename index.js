const express = require('express');
const {static} = require("express");
const app = express();

app.use(express.static('public'));

/**
 * all route in her app.all()
 */
app.all('/secret',(req,res,next)=>{
    console.log('I am in secret route all');
    next();
});

app.get('/',(req,res)=>{
    res.send('shuvo is learning node js');
});
app.post('/',(req,res)=>{
   res.send('This is post request');
});

app.put('/user',(req,res)=>{
    res.send('This is just a put request');
});
app.delete('/user',(req,res)=>{
    res.send('We get a delete request');
});

app.listen(3000,()=>{
    console.log('Running on Port:'+3000);
});