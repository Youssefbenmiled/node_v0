const express=require('express');
const app=express();//init express
const access=require('./access');


access.accessDb.connect((err)=>{
    if(err)
    throw err;
    console.log('connected');
})

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/',access.getAccess,(req,res)=>{
    res.send('Hello world ! ')
});

app.post('/add',(req,res)=>{
    const{name,age}=req.body;
    res.status(200).json({name,age})
});


app.put('/put',(req,res)=>{
    const{x,y}=req.body;

    res.status(200).json({res:sum(x,y)})
});

function sum(x,y){
return ((x+y)/200);
}



app.listen(8081,(err)=>{
    if(err)
    throw err;
    console.log(`Server listenning on port 8081`)
})