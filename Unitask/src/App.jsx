import React, { useState } from 'react';
import { Dashboard } from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ActivityProvider } from './ActivityContext';

import './index.css'
import { CalendarPage } from './pages/CalendarPage';

function App() {

  const [activities, setActivities] = useState({});

  

  return (
    <>
    <ActivityProvider> 
   <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/calendar" element={<CalendarPage/>} />
      </Routes>
    </Router>
    </ActivityProvider>
    
    </>
  )
}

export default App
