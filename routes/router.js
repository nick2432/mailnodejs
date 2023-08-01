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
          const htmlBody = `
      <h1>Hello ${name},</h1>
      <p>Thank you for your message!</p>
      <p>Your mobile number: ${no}</p>
      <p>Your email address: ${email1}</p>
      <p>Message: ${message}</p>
    `;

    const mailOptions = {
      from: "nikhilanand2432@gmail.com",
      to: email,
      subject: "Thank you for your message",
      html: htmlBody,
    };

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
