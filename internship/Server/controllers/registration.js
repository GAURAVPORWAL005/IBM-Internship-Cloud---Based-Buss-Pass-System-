import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";
import express from "express";
import bodyParser from 'body-parser';
import register from '../database/user_registration.js';
import bcrypt from 'bcrypt';//encrypt the data in the database 

//for using the  file system in any operting system
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const registration = express();

//to get the payload as json file from the client side
registration.use(bodyParser.json())

//to insert the payload from the json file in the database
registration.post("/Form.html", async (req,res)=>{

    //takes all the info user sends and add them to the database if it is not already present in the database

    const email=req.body.email
    const name=req.body.name
    const phoneNo=req.body.mobile
    const validation=req.body.expdate
    const destination=req.body.destination
    const password=await bcrypt.hash(req.body.password,15)

       try {
        const response =await register.create({
            email,
            password,
            name,
            phoneNo,
            validation,
            destination
        });
        console.log("User Created successfully"+ response);//for the test if the data is passing or not
        } 
        catch (error) {
        if(error.code===11000){
            //there is a bug that this errror will also work for dublicate phone numbers
            //this is to detect the dublicte in email in the database
            return res.json({status:'error' , error : 'Email already in use'})
        }
       // throw(error)
       return res.json({status:'ok'});
    }
})

registration.get("/Form.html", (req,res)=>{
    res.sendFile(path.join(__dirname,"../../Frontend/Form.html"))
})


export default registration;