import { useState } from 'react'
import { SideBar } from './SideBar.jsx';
import { Calendar} from './Calendar.jsx';

import './index.css'

function App() {
  

  return (
    <>
    <div className='grid'>
    <SideBar/>
    <Calendar/> 
    </div>
     
    </>
  )
}

export default App
