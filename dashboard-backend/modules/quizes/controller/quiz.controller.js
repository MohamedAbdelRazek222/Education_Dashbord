const quizModel = require("../../../DB/models/quiz.model");



// addQuiz------------------------------------------------
const  addQuiz=async (req, res)=>{
    try{
    
    const {title,course,topic,due_to}=req.body;
    const newQuiz=new quizModel({title,course,topic,due_to})
    const savedQuiz=await newQuiz.save()
    res.json({savedQuiz})
    
    }catch(e){
    
    
        res.status(200).json({messge:'error in addUser'})
    
    }
    }

// getQuiz------------------------------------------------------
const getQuiz =async(req, res) => {

    const {id}=req.params
const quiz=await quizModel.findById(id)

res.status(200).json(quiz)

}
 // get Quizes----------------------------------------------------------
    const getAllQuizes=async(req, res)=>{


const allData=await quizModel.find()


res.json(allData)

    }
 // deleteQuizes----------------------------------------------------------
const  deleteQuize=async(req, res)=>{
try{


    const {id}=req.params
    await quizModel.findByIdAndDelete(id)
    res.json(deleted._id)
}catch(err){

    res.json({message:'Error in deleteQuize'})
}

}
 // updateQuize----------------------------------------------------------
const updateQuize=async(req, res)=>{
try{


    const {id}=req.params
await quizModel.findOneAndUpdate({_id:id},req.body)

res.json({message:'updated'})
}catch(err){

    res.json({message:'Error in Updated'})
 
}

}




    module.exports={addQuiz,getAllQuizes,getQuiz,deleteQuize,updateQuize}