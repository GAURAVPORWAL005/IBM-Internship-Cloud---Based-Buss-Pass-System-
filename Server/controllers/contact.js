import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

const contact = express();

contact.get("/contact.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"../../Frontend/contact.html"))
})

export default contact;