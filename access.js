const mysql=require('mysql');

 module.exports.accessDb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "5mrruypktt"
});





module.exports.getAccess=(req,res,next)=>{
    const{user}=req.body;
    if(user==='MPDAM'){
        next();
    }else{
        res.status(400).json({res:'ACCESS DENIED !'})
    }
}