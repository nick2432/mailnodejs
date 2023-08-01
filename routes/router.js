const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");
router.post("/register",(req,res)=>{
    const {email,name,no,email1,message} = req.body;
    try{
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"nikhilanand2432@gmail.com",
                pass:"heppviwbgxxuuqae"
            }
        });
        const mailOptions = {
            from: "nikhilanand2432@gmail.com",
            to : email,
            subject:"lsdfkjdlsfj",
            html:`<h1>${name},${no},${email1},${message}<h1>`
        }
        transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log("Error",error);
            }
            else{
                console.log("Email sent"+ info.response);
                res.status(201).json({ststus:201,info})
            }
        })
    }catch(error){
        res.status(201).json({ststus:401,error})
    }
});
module.exports = router;