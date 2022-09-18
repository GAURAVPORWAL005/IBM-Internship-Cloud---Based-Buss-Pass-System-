import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";
import bodyparser from "body-parser";
import express from "express";
import register from '../database/user_registration.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import print_pass from "../controllers/print_pass.js"

const JWT_SCERET='qfq3fDdd11fq13r@!YF@TW!Ebyu&U!W!(EUyv!IWV!W&*!WYV!W(&huuudvug';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const login=express();

login.use(bodyparser.json())
login.get("/EditAndPrintPass",print_pass)

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

    if(await bcrypt.compare(password,user.password)){
        return res.redirect(301,"/EditAndPrintPass.html")
        // const token=jwt.sign({
        //     id: user._id,
        //     emial: user.email
        // },JWT_SCERET)
        // return res.json({statue:'ok',data:token})
      }

    return res.json({status: 'error', error: "Invalid password"})
})

login.get("/login.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"../../Frontend/login.html"))
})

export default login;