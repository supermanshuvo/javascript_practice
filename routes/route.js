const express = require('express');
const app = express();

/**
 * app get request
 */
app.get('/',(req,res)=>{
    res.send('Root');
});