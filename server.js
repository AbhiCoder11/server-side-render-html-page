
const express=require('express');

const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:true}))

const port=8000;

app.get('/',(req,res)=>{
 res.sendFile(__dirname+'/index.html');
 console.log(__dirname);
});

app.post('/quotes',(req,res)=>{
    console.log('i got to qoutes');
    res.send('form for calendar');
    console.log(req.body)
})

app.listen(port,()=>{
    console.log("app is running at port"+port);
})
