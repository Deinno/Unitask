import { useState } from 'react'
import { Navbar } from '../Navbar.jsx';
import { AppCalendar } from '../AppCalendar.jsx';
import { ActivityCard } from '../ActivityCard.jsx';
import { ActivityProvider } from '../ActivityContext.jsx';

import '../../src/index.css'

export function Dashboard() {

  const [activities, setActivities] = useState({});

  

  return (
    <>
   <ActivityProvider>
      <Navbar/>
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


