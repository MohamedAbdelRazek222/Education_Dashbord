import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteAnnouncementById, editAnnounce, getAllAnnounces } from "../store/redusers/Announce.slice";

export default function Announcemnet() {
  let { annonces } = useSelector((state) => state.announceList);
  const dispatch = useDispatch();
  const deleteHandler = async (e) => {
   
    console.log({e})
await dispatch(deleteAnnouncementById(e))
dispatch(getAllAnnounces())
  };

  useEffect(() => {
    dispatch(getAllAnnounces());
  }, []);
  return (
    <>
      <NavLink to={`/addAnnounce`} className="btn Add">Add</NavLink>
      <table class="styled-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Title</th>
            <th>Pic</th>
            <th>Desc</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
         {annonces.map((ele, index) => {
const { name, title, pic, desc, _id }=ele
            return (
              <tr className="active-row">
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{title}</td>
                <td>
                  <img style={{ width: "100%", height: "100%" }} src={pic} />{" "}
                </td>
                <td>{desc}</td>
                <td className="announce-btns">
                  <button
                    className="Delete btn"
                    onClick={() => deleteHandler(_id)}
                  >
                    Delete
                  </button>
                <NavLink to={`/editAnnouce/${_id}`} className="Edit btn" >Edit</NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
