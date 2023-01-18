import React, { useEffect } from "react";
import { TbQuote } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Quiz from "../components/Quiz";
import Sidebar from "../components/Sidebar";
import { getAllAnnounces } from "../store/redusers/Announce.slice";
import { getAllQuizes } from "../store/redusers/QuizSlice";

export default function Layout() {
  const { annonces } = useSelector((state) => state.announceList);
  const { quizes } = useSelector((state) => state.quizesList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAnnounces());
    dispatch(getAllQuizes());
  }, []);
  
  return (
    <div className="container-dashboard">
      <div className="dashboard left-side-dashboard">
        <Sidebar />
      </div>
      <div className="dashboard right-side-dashboard">
        <Navbar />
       

        <Outlet />
      </div>
    </div>
  );
}
