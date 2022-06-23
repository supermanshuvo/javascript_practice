const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('shuvo is learning node js');
});
app.post('/',(req,res)=>{
   res.send('This is post request');
});
app.listen(3000,()=>{
    console.log('Running on Port:'+3000);
});