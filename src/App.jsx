import React from 'react';

import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandPage/LandPage.jsx';
import Login from './pages/Login/Login.jsx';
import Admin from './pages/Admin.jsx';
import ClubForm from './pages/ClubForm.jsx';
import DisplayClub from './pages/DisplayClub.jsx';
import Club from './pages/Club.jsx';
import Professor from './pages/Professor.jsx';
import ProfessorForm from './pages/ProfessorForm.jsx';
import EventForm from './pages/EventForm.jsx';
import ProgressTracker from './pages/ProgressTracker.jsx';
import ApprovalForm from './pages/ApprovalForm.jsx';
import ApproveLetter from './pages/ApproveLetter.jsx';
import Bills from './pages/Bills.jsx';

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/clubaddfrom" element={<ClubForm/>}/>
      <Route path="/displayclub" element={<DisplayClub/>}/>
      <Route path="/club" element={<Club/>}/>
      <Route path="/prof" element={<Professor/>}/>
      <Route path="/approval" element={<ApprovalForm/>}/>
      <Route path="/reports" element={<ApproveLetter/>}/>
      <Route path="/bills" element={<Bills/>}/>
      <Route path="/eventform" element={<EventForm/>}/>
      <Route path="/progress" element={<ProgressTracker/>}/>
      <Route path="/updateprofessor" element={<ProfessorForm/>}/>  
    </Routes> 
    </>
  )
}
