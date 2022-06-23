const express = require('express');
const app = express();
const port = 3000;
/**
 * app get request
 */
app.get('/',(req,res)=>{
    res.send('Root');
});

/**
 * About Route
 */

app.get('/about',(req,res)=>{
    res.send('About page');
})

/**
 * Random.text route
 */
app.get('/random.text',(req,res)=>{
    res.send('random.text');
});



/**
 * Running server port in 3000
 */
app.listen(port,()=>{
   console.log(`Server is running on Port: ${port}`);
});