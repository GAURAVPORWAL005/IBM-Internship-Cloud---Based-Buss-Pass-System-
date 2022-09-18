import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";
import  express  from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

const bus_detail = express();

bus_detail.get("/bus_details.html", (req,res)=>{
    res.sendFile(path.join(__dirname,"../../Frontend/bus_details.html"))
})

export default bus_detail;