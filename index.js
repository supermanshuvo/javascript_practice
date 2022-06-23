const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('shuvo is learning node js');
})
app.listen(3000,()=>{
    console.log('Running on Port:'+3000);
})