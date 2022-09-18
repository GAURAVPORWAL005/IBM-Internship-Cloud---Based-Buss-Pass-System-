import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

const about = express();

about.get("/about.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"../../Frontend/about.html"))
})

export default about;