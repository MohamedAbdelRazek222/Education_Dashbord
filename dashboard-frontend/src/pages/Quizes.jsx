import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  deleteQuizById,
  getAllQuizes,
} from "../store/redusers/QuizSlice";

export default function Quizes() {
  let { quizes } = useSelector((state) => state.quizesList);
  const dispatch = useDispatch();
  const deleteHandler = async (e) => {
    await dispatch(deleteQuizById(e));
    dispatch(getAllQuizes());
  };

  useEffect(() => {
    dispatch(getAllQuizes());
  }, []);
  return (
    <>
      <NavLink to={`/addQuizes`} className="btn Add">
        Add
      </NavLink>
      <table class="styled-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>title</th>
            <th>course</th>
            <th>topic</th>
            <th>due_to</th>
          </tr>
        </thead>
        <tbody>
          {quizes.map((ele, index) => {
            const { title, course, topic, due_to, _id } = ele;
            return (
              <tr className="active-row">
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>{course}</td>
                <td>{topic}</td>
                <td>{due_to}</td>
                <td className="announce-btns">
                  <button
                    className="Delete btn"
                    onClick={() => deleteHandler(_id)}
                  >
                    Delete
                  </button>
                  <NavLink to={`/editQuiz/${_id}`} className="Edit btn">
                    Edit
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
