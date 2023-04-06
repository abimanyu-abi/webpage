import express from "express";
import mysql from "mysql"
import cors from "cors";


const con = mysql.createConnection({
      host:"database-2.cpue9rwgrd7m.us-east-2.rds.amazonaws.com",
      port:"3306",
      user:"admin",
      database:"mydb",
      password:"iamabimanyu",
     
})
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
})

const app = express();
app.use(cors());
app.use(express.json())


const port = 8080
app.listen(port,()=>{
    con.connect(err=>{
        if(err){
        console.log(err.message)
        return
        }
        console.log("db connected")
        
    })
    
})
app.get("/",(req,res)=>{
    res.sendFile("index.html").status(200)
})


app.post("/",(req,res)=>{
         const {firstname,lastname,email,number,date,gender,address1,address2}=req.body;
         const name = firstname+" "+lastname;
         const address = address1+"\n"+address2;
     ///    const sql = `INSERT into user_details (name,email,phone,Date,gender,address) VALUES (${name},${email},${number},${date},${gender},${address})`
      //   con.query(sql,(err,res)=>{
       //     if(err) throw err
     //       res.status(200).json({name,email});
     //    })
     
     res.status(200).json({name,email});
     
})
app.get("/registered",(req,res)=>{
    
    
})
