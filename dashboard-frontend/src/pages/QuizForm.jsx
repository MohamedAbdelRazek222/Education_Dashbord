import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addQuiz, editQuiz } from '../store/redusers/QuizSlice'

export default function QuizForm() {
    const {_id}=useParams()
    const {quizes}=useSelector(state=>state.quizesList)
    const oldObject=quizes.find((ele)=>{
      
return ele._id === _id
    })
    const [formValue,setFormValue]=useState({
      title:_id?oldObject.title:'',
      course:_id?oldObject.course:'',
      topic:_id?oldObject.topic:'',
      due_to:_id?oldObject.due_to:''
 
 
 
 
    })
  const dispatch=useDispatch() 
  const navigate=useNavigate() 
const changeHandle=(e)=>{

    setFormValue((prev)=>{

return ( {...prev,
    [e.target.id]:`${e.target.value}`
    })
    })

}
const submitHandle =(e)=>{
e.preventDefault();
if(_id){
  
  
dispatch(editQuiz([_id,formValue]))
}else{
    dispatch(addQuiz(formValue))

}
navigate('/quizes')

}




  return (
    <div class="form">
    <div class="title"> {_id ? 'Edit Data' :"AddData"} </div>
    <div class="subtitle">Let's create your account!</div>
    <form onChange={(e)=>changeHandle(e)}>
    <div class="input-container ic1">
      <input id="title" className="input" type="text" placeholder=" " />
      <div class="cut"></div>
      <label for="title" className="placeholder"> Title</label>
    </div>
    <div class="input-container ic2">
      <input id="course" className="input" type="text" placeholder=" " />
      <div class="cut"></div>
      <label for="course" className="placeholder">course</label>
    </div>
    <div class="input-container ic2">
      <input id="topic" className="input" type="text" placeholder=" " />
      <div class="cut"></div>
      <label for="topic" className="placeholder">Topic</label>
    </div>
    <div class="input-container ic2">
      <input id="due_to" className="input" type="text" placeholder=" " />
      <div class="cut"></div>
      <label for="due_to" className="placeholder">due_to</label>
    </div>
    
    <button type="text" class="submit" onClick={(e)=>submitHandle(e)}>submit</button>
    </form>
  </div>
  )
}
