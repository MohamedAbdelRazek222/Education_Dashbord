const annoncementModel = require("../../../DB/models/annonsement.model");


// addUser---------------------------------------------------------------------


const  addUser=async (req, res)=>{
try{

const {name,title,pic,desc}=req.body;
const newUser=new annoncementModel({name,title,pic,desc})
const savedUser=await newUser.save()
res.json(savedUser)

}catch(e){


    res.status(200).json({messge:'error in addUser'})

}

}

// deleteUser---------------------------------------------------------------------


const getAllAnnonses=async(req, res)=>{


    const allData=await annoncementModel.find()
    
    
    res.json(allData)
    
        }
 // deleteAnnouncement----------------------------------------------------------
 const  deleteAnnouncement=async(req, res)=>{
    try{
    
    
        const {id}=req.params
     const deleted=await annoncementModel.findByIdAndDelete(id)
        res.json(deleted._id)
    }catch(err){
    
        res.json({message:'Error in deleteAnnouncement'})
    }
    
    }
     // updateAnnouncement----------------------------------------------------------
    const updateAnnouncement=async(req, res)=>{
    try{
    
    
        const {id}=req.params
   const updated= await annoncementModel.findOneAndUpdate({_id:id},req.body)
    
    res.json(updated)
    }catch(err){
    
        res.json({message:'Error in Updated'})
     
    }
    
    }
    // getAnnouncement------------------------------------------------------
const getAnnouncement =async(req, res) => {

    const {id}=req.params
const announce=await annoncementModel.findById(id)

res.status(200).json(announce)

}

        
        
        


        module.exports ={addUser,getAllAnnonses,getAnnouncement,deleteAnnouncement,updateAnnouncement}



        /*
        
        
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7LmDU5nXSkLooNyuq6-GDmKIa23pgEzlqZQ&usqp=CAU        
https://thumbs.dreamstime.com/b/school-teacher-avatar-icon-flat-style-school-teacher-avatar-icon-flat-illustration-school-teacher-avatar-vector-icon-web-179288093.jpg
https://media.istockphoto.com/id/948490226/vector/user-avatar-teacher-a-teacher-in-a-suit-with-glasses.jpg?s=170667a&w=0&k=20&c=OQYVXlP0xiwAOvHUUZcYR3YG3YAiimUNPdXnnLQySg0=

      



*/