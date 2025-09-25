
const exp=require("express");
const app=exp();
app.use(exp.json());

app.get("/user",(req,res)=>{
    res.status(200).json({'message':"user created"});
})

app.post("/create_user",(req,res)=>{
    const {name,email}=req.body;
    res.status(201).json({"name":name,"email":email});
})

app.put("/update_user/:id",(req,res)=>{
    const id=req.params.id;
    //const {name,email}=req.body;
    res.status(200).json({"message":"updated","name":"jacky","email":"jacky@gmail.com","id":id});
})

app.patch("/patch_user/:id",(req,res)=>{
    const id=req.params.id;
    res.status(200).json({"message":"user data patched","id":id});
})

app.delete("/delete_user/:id",(req,res)=>{
    const id=req.params.id;
    res.status(200).json({"message":"user deleted","id":id});
})
app.listen(5421,(error)=>{
    console.log("error:-" + error);
})