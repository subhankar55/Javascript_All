const express = require('express');
const path = require("path");
const fs = require("fs")
const app = express();

const port = 80;
// EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static')); // For serving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine','pug'); // set the template engine as pug
app.set('views',path.join(__dirname,'views')); // set the views directory

// ENDPOINTS
app.get('/',(req,res)=>{
    const con = 'This is the best content so far u have used in the internet.'
    const params = {'title': 'PUBG is the best game', "content": con};
    res.status(200).render('index.pug',params);
})

app.post('/',(req,res)=>{
    console.log(req.body);
    let name = req.body.name;
    let age = req.body.age;
    let gender = req.body.gender;
    let address = req.body.address;
    let more = req.body.yourself;
    let op = `The name of the client is ${name}.His/Her age is ${age}.Gender is ${gender}.Address: ${address}.He/She is ${more}.`
    fs.writeFileSync('Output.txt',op);
    const params = {'message':'Your form has been submitted successfully.'};
    res.status(200).render('index.pug',params);
})

// START THE SERVER
app.listen(port,()=>{
    console.log(`This application started successfully on ${port}`)
});