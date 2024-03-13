const express=require('express')
const app=express()
const cors=require('cors')
const port=7000;
const mongoose=require('mongoose')
const multer=require('multer')
const path=require('path');
const methodModel = require('./models/user');

mongoose.connect('mongodb://127.0.0.1:27017/data')

app.use(express.json())
app.use(cors())
app.use(express.static('public'))


app.post('/post', async(req, res)=>{
    try{
        const {Name, Dep, Des, Img}=req.body
        const aa= await methodModel.create({Name:Name, Dep:Dep, Des:Des, Img:Img})
        res.json(aa)
    }
    catch(err){
        console.log(err);
    }
})

app.get('/get', async(req,res)=>{
    try{
        const a = await methodModel.find()
        res.json(a)
        console.log(a);
    }
    catch(err){
        console.log(err);
    }
})



app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})