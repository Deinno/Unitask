import { useState } from 'react'
import { SideBar } from './SideBar.jsx';
import { AppCalendar } from './AppCalendar.jsx';
import { ActivityCard } from './ActivityCard.jsx';
import { ActivityProvider } from './ActivityContext';

import './index.css'

function App() {

  const [activities, setActivities] = useState({});

  

  return (
    <>
   <ActivityProvider>
      <SideBar />
      <div className='justify-center space-x-10 flex my-7 ml-10'>
      <AppCalendar activities={activities} />
      <ActivityCard />
      </div>
      
    </ActivityProvider>
    </>
  )
}

export default App
