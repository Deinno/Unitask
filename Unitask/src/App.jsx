import React, { useState } from 'react';
import { Dashboard } from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ActivityProvider } from './ActivityContext';

import './index.css'
import { CalendarPage } from './pages/CalendarPage';
import { UserProfile } from './pages/UserProfile';
import { Login } from './Login.jsx';
import { Register } from './Register.jsx';
import { CoursesPage } from './pages/CoursesPage.jsx';
import { UserProfileAdmin } from './pages/UserProfileAdmin.jsx';

function App() {

  const [activities, setActivities] = useState({});

  

  return (
    <>
    <ActivityProvider> 
   <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/calendar" element={<CalendarPage/>} />
        <Route path="/userProfile" element={<UserProfile/>} />
        <Route path="/adminuser" element={<UserProfileAdmin/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cursos" element={<CoursesPage/>} />
      </Routes>
    </Router>
    </ActivityProvider>

    </>
  )
}

export default App
