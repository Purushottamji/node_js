
const exp=require("express");
const app=exp();
const exp = require("express");
const app = exp();
app.use(exp.json());

app.get("/user",(req,res)=>{
    res.status(200).json({'message':"user created"});
const student = [
    {
        "name": "Rahul Drawid",
        "age": 52, 
        "email": "rahul@gmail.com"
    }
];

app.get("/user", (req, res) => {
    res.status(200).json({ 'message': "user created" + student.length, "user": student });
})

app.post("/create_user",(req,res)=>{
    const {name,email}=req.body;
    res.status(201).json({"name":name,"email":email});
app.post("/create_user", (req, res) => {
    const { name, email, age } = req.body;
    const data = ({ "name": name, "age": age, "email": email });
    student.push(data);
    res.status(201).json({ "message": "User Post Successful" });
})

app.put("/update_user/:id",(req,res)=>{
    const id=req.params.id;
app.put("/update_user/:id", (req, res) => {
    const id = req.params.id;
    //const {name,email}=req.body;
    res.status(200).json({"message":"updated","name":"jacky","email":"jacky@gmail.com","id":id});
    res.status(200).json({ "message": "updated", "name": "jacky", "email": "jacky@gmail.com", "id": id });
})

app.patch("/patch_user/:id",(req,res)=>{
    const id=req.params.id;
    res.status(200).json({"message":"user data patched","id":id});
app.patch("/patch_user/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({ "message": "user data patched", "id": id });
})

app.delete("/delete_user/:id",(req,res)=>{
    const id=req.params.id;
    res.status(200).json({"message":"user deleted","id":id});
app.delete("/delete_user/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({ "message": "user deleted", "id": id });
})
app.listen(5421,(error)=>{
app.listen(5400, (error) => {
    console.log("error:-" + error);
})