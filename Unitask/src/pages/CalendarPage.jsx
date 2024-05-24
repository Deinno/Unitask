import { AppFullCalendar } from "../AppFullCalendar";
import { Navbar } from "../Navbar";

import '../../src/index.css';

export function CalendarPage() {
  return (
    <>
      <Navbar/>
      <div className='justify-center space-x-10 flex my-7 ml-10'>
        <AppFullCalendar />
      </div>
    </>
  )
}