import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addAnnounce, editAnnounce } from '../store/redusers/Announce.slice'

export default function EditForm() {
    const {_id}=useParams()
    const {annonces}=useSelector(state=>state.announceList)
    console.log({annonces})
    const oldObject=annonces.find((ele)=>{

return ele._id === _id
    })
    console.log({oldObject})
    const [formValue,setFormValue]=useState({
 name:_id?oldObject.name:'',
 title:_id?oldObject.title:'',
 desc:_id?oldObject.desc:''

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

dispatch(editAnnounce([_id,formValue]))
}else{
    dispatch(addAnnounce(formValue))

}
navigate('/announcement')

}

  return (
    <div class="form">
    <div class="title"> {_id ? 'Edit Data' :"AddData"} </div>
    <div class="subtitle">Let's create your account!</div>
    <form onChange={(e)=>changeHandle(e)}>
    <div class="input-container ic1">
      <input id="name" className="input" type="text" placeholder=" " />
      <div class="cut"></div>
      <label for="name" className="placeholder"> name</label>
    </div>
    <div class="input-container ic2">
      <input id="title" className="input" type="text" placeholder=" " />
      <div class="cut"></div>
      <label for="title" className="placeholder">title</label>
    </div>
    <div class="input-container ic2">
      <input id="desc" className="input" type="text" placeholder=" " />
      <div class="cut"></div>
      <label for="desc" className="placeholder">Description</label>
    </div>
    
    <button type="text" class="submit" onClick={(e)=>submitHandle(e)}>submit</button>
    </form>
  </div>
  )
}
