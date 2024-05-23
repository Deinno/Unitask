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
      <div>
      <div className="containers bg-blue-100 p-4 rounded-t-lg">
                <h2 className="text-xl mb-0 font-bold text-center">Actividades</h2>
            </div>
            <ActivityCard />
      </div>
      </div>
      
    </ActivityProvider>
    </>
  )
}

export default App
