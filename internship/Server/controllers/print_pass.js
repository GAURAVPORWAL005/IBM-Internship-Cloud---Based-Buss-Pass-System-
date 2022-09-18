import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";
import  express  from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

const pass = express();

pass.get("/PrintPass.html", (req,res)=>{
    res.sendFile(path.join(__dirname,"../../Frontend/PrintPass.html"))
})

export default pass;