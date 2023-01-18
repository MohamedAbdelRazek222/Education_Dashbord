import React from 'react'
import Layout from './pages/Layout.jsx'
import { Route,Routes } from 'react-router-dom'
import Announcemnet from './pages/Announcemnet.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Announcement from './components/Announcement.jsx'
import EditForm from './components/EditForm.jsx'
import LogForm from './pages/LogForm.jsx'
import Quizes from './pages/Quizes.jsx'
import QuizForm from './pages/QuizForm.jsx'
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/announcement' element={<Announcemnet />}/>
        <Route path="/editAnnouce/:_id" element={<EditForm />}></Route>
        <Route path="/addAnnounce" element={<EditForm />}></Route>
        <Route path="/loginlogout" element={<LogForm />}></Route>
        <Route path="/quizes" element={<Quizes />}></Route>
        <Route path='/editQuiz/:id' element={<QuizForm />}></Route>
        <Route path="/addQuizes" element={<QuizForm />}></Route>

      </Route>
    </Routes>
  )
}
