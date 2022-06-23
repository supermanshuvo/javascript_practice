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
 * Route path abcd or acd
 */
app.get('/ab?cd',(req,res)=>{
    res.send('ab?cd');
});




app.get('/ab+cd',(req,res)=>{
    res.send('ab+cd');
});

app.get('/ab*cd',(req,res)=>{
    res.send('ab*cd');
});


app.get('/ab(cd)?e', (req, res) => {
    res.send('ab(cd)?e');
});


app.get(/a/, (req, res) => {
    res.send('/a/');
});

app.get(/.*fly$/, (req, res) => {
    res.send('/.*fly$/');
});

/**
 * Single call back function can handle a route
 */
app.get('/example/a',(req,res)=>{
    res.send('Hello From a')
});

/**
 * Running server port in 3000
 */
app.listen(port,()=>{
   console.log(`Server is running on Port: ${port}`);
});