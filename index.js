const express = require('express');
const app = express();
// static file serve
app.use('/static',express.static('public'));
// root route
app.get('/',(req,res)=>{
   res.send('This is test');
});
// This route path will match requests to /about
app.get('/about',(req,res)=>{
   res.send('About');
});

// This route path will match request to /random.text.
app.get('/random.text',(req,res)=>{
   res.send('random.text');
});

// This route path will match acd ad abcd
app.get('/ab?cd',(req,res)=>{
   res.send('ab?cd');
});

// This route path will match abcd,abbcd,abbbcd, and so on.
app.get('/ab+cd',(req,res)=>{
   res.send('ab+cd');
});

// This route path will match abcd,abxcd,abRANDOMcd,ab123cd, and so on
app.get('/ab*cd',(req,res)=>{
   res.send('ab*cd');
});

// This route path will match /abe and /abcde.
app.get('/ab(cd)?e',(req,res)=>{
   res.send('ab(cd)?e');
});




app.post('/',(req,res)=>{
   res.send('POST request to the home page');
});

app.listen(3000,()=>{
   console.log(`Server is running on port: ${3000}`);
});