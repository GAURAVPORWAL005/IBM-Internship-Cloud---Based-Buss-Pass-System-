import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import home from "./controllers/home.js";
import about from "./controllers/about.js";
import contact from "./controllers/contact.js";
import login from "./controllers/login.js";
import registration from "./controllers/registration.js";
import bus_detail from "./controllers/bus_details.js";
import pass from "./controllers/print_pass.js";
import payment from "./controllers/paymrnt.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
//console.log(path.join(__dirname,".."));

const app = express();

app.use(express.static(path.join(__dirname,"../Frontend")))
app.get("/", home);  //to get the home page from home.js in the the folder route
app.get("/about.html", about)
app.get("/contact.html",contact)
app.get("/login.html",login)
app.post("/login.html",login)
app.get("/Payment.html",payment)
app.get("/Form.html",registration)
app.post("/Form.html",registration)
app.get("/bus_details.html",bus_detail)
//app.get("/PrintPass.html",pass)
//app.get("/Payment.html",payment)

app.use(bodyParser.json({ limit : "10mb", extended:true }));
app.use(bodyParser.urlencoded({ limit : "10mb", extended:true }));

const port=process.env.port || 5000;
const connection_url= "mongodb+srv://kushagra_joshi:34R8X7ttReLPmmTc@cluster0.sx1ld.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connection_url)
    .then( () => app.listen(port , () => console.log("connection successful")))
    .catch((error)=> console.log("error.message"))