
const db= require('../database/db');

const getAllEvents = async (req,res) =>{
    await res.status(200).json({msg:"Hello World"})
}
const getAllUsers = async (req,res) => {
    await res.status(200).json({msg:"Hello users"})
}
const addEvent = async (req,res)=>{
    console.log(req.body);
//    const {eName,sDate,eDate,eDescription,banner,images,position} = req.body;
//    try{ 
//     const event = await db.query("INSERT INTO events(event_name,start_date,end_date,description,banner,photos,position) VALUES ($1, $2, $3, $4, $5, $6, $7)"
//     ,[eName,sDate,eDate,eDescription,banner,images,position]);
//     console.log(event);
//     res.send("Successfull")
//    }catch(err){
//         console.log(err.message)
//    }

}
module.exports = {
    getAllEvents,
    getAllUsers,
    addEvent
}