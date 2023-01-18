import React from 'react'

export default function Announcement({ name, title, pic, desc }) {
  return (
    <>
    
    <div className="person">
                      <div className="announce-left">
                        <img src={pic} alt="" />
                        <div className="name">
                          <h5>{name}</h5>
                          <p style={{ color: `gray`, fontSize: `14px` }}>
                            {title}
                          </p>
                        </div>
                      </div>
                      <div className="desc">

                      <p >{desc}</p>
                      </div>
                    </div>
    </>
  )
}
/*

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAnnounces } from '../store/redusers/Announce.slice'

export default function Announcemnet() {
    let {annonces}=useSelector(state=>state.announceList)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllAnnounces())

    },[])
  return (
    <div style={{ background:'red' ,height:'100vh',width:'100%'}}>
   <table>
	<thead>
		<tr>
			<td>Name</td>
			<td>Gender</td>
			<td>Age</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>David</td>
			<td>Male</td>
			<td>23</td>
		</tr>
		<tr>
			<td>Jessica</td>
			<td>Female</td>
			<td>47</td>
		</tr>
		<tr>
			<td>Warren</td>
			<td>Male</td>
			<td>12</td>
		</tr>
	</tbody>
</table>
    </div>
  )
}



*/
