const express = require('express');
const app = express();
const port = 3000;

/* const myLogger = function (req,res,next){
    console.log('Logged');
    next();
};
app.use(myLogger);

app.get('/',(req,res)=>{
    res.send('This is runnig in middleware file');
});

*/

const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}

app.use(requestTime)

app.get('/', (req, res) => {
    let responseText = 'Hello World!<br>'
    responseText += `<small>Requested at: ${req.requestTime}</small>`
    res.send(responseText)
})



app.listen(port,function (req,res){
    console.log('Now it is running ok');
});