
const exp=require("express");
const app=exp();
app.use(exp.json());

app.get("/user",(req,res)=>{
    res.status(200).json({'message':"user created"});
})

app.listen(5421,(error)=>{
    console.log("error:-" + error);
})