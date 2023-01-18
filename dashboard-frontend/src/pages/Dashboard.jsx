import React, { useEffect } from 'react'
import Announcement from '../components/Announcement';
import Quiz from '../components/Quiz';
import { useDispatch, useSelector } from "react-redux";
import { getAllAnnounces } from '../store/redusers/Announce.slice';
import { getAllQuizes } from '../store/redusers/QuizSlice';

export default function Dashboard() {

    const { annonces } = useSelector((state) => state.announceList);
    const { quizes } = useSelector((state) => state.quizesList);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAllAnnounces());
      dispatch(getAllQuizes());
    }, []);

  return (
    <div className="content" style={{ backgroundColor: `#e4e4e4` }}>
    {/* =============== banner ============ */}
    <div className="banner">
      <div className="banner_text">
        <h2>EXAMS TIME</h2>
        <p>
          Here we are, Are you ready to figth? Don't worry, we prepared
          some tips to be ready for your exams
        </p>
        <p>" Nothing happens until something moves" - Albert Einstein</p>

        <button>View exams tips</button>
      </div>

      <div className="banner_img">
        <img src="./../../Screenshot 2023-01-18 065031.jpg" alt="" />

      </div>
    </div>

    <div className="announce">
      {/* Big-left-side */}
      <div className="announce_profiles" style={{ padding: `10px 10px` }}>
        <h4>Anouncements</h4>
        <p style={{ color: `gray`, fontSize: `13px` }}>
          We educate | keep updated
        </p>
        {/* left-side */}
        <div style={{ marginTop: `20px`, padding: `20px` }}>
          {annonces.map((announce) => {
        
            return (
              <Announcement {...announce} /> 
            );
          })}
        </div>
      </div>
      {/* Big-right-side */}
      <div className="announce_due">
        <h3>What's due</h3>
        <p
          style={{
            marginBottom: `20px`,
            color: `gray`,
            fontSize: `12px`,
          }}
        >
          Sometimes "LATER" becomes "NEVER", Go Now
        </p>
{quizes.map((quiz)=>{

return   (<Quiz {...quiz} />)


})}
      


      </div>
    </div>
  </div>
  )
}
