import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";
import bodyparser from "body-parser";
import express from "express";
import register from '../database/user_registration.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import payment from './paymrnt.js';

const JWT_SCERET='qfq3fDdd11fq13r@!YF@TW!Ebyu&U!W!(EUyv!IWV!W&*!WYV!W(&huuudvug';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const login=express();

login.use(bodyparser.json())
login.get("/Payment.html",payment)

login.post("/login.html", async (req,res)=>{
    const {email,password}=req.body;
    console.log(req.body);
    // register.findOne({email}, (error,data)=>{
    //     console.log(error.message);
    // })
    console.log(email);
    const user = await register.findOne({email}).lean();

    console.log(user);
    //console.log(user.email)
    //console.log(user.email)
    
    if(!user){
        return res.json({status: 'error', error: "Invalid username or password"})
    }

    res.redirect(301,"/Payment.html")
    if(await bcrypt.compare(password,user.password)){
       // res.redirect(301,"/Payment.html")
        const token=jwt.sign({
            id: user._id,
            emial: user.email
        },JWT_SCERET)
        return res.json({status: 'ok',data: token})
      }

    return res.json({status: 'error', error: "Invalid password"})
})

login.get("/login.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"../../Frontend/login.html"))
})

export default login;