const db = require('../database/db');
const bcrypt = require('bcrypt');
const {addData,updateData} = require('../modal/adminModal');


const registerAdmin = async (req,res) => {
    const {username,contact,email,password,confirmPassword,picture} = req.body;

    if(!username || !contact || !email || !password || !confirmPassword){
        await res.status(404).send("Please send all the fields required");
    }
    if(contact.toString().length!=10){
        await res.send("Contact Number must be of length 10");
    }
    if(password.length<=8){
        await res.status(400).send("Password not valid");
    }
    if(password != confirmPassword){
        await res.send("Passwords donot match");
    }
    
    const hashPassword = await bcrypt.hash(password,10);
    try{
        await db.query(addData,[username,contact,email,hashPassword,picture]);
        res.send("Insertion Succesful");

    }catch(err){
            console.log(err.message);
    }
   
}
const updateAdmin = async (req,res) =>{
    try{
    const {id} = req.params;
    const hashPassword = await bcrypt.hash(req.body.password,10);
    const result = await db.query(updateData,[req.body.username,req.body.contact,req.body.email,hashPassword,id]);

    res.send("Successfullt updated");
    }catch(err){
        console.log(err.message)
    }
}

const getAdmin = async (req,res) => {
    try{
        const result = await db.query("select * from admin");
        res.json(result.rows)
    }catch(err){
        console.log(err.message)
    }

}
module.exports= {registerAdmin,updateAdmin,getAdmin}