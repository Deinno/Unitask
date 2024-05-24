import React, { useContext } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import { ActivityContext } from './ActivityContext';





export function AppFullCalendar() {

  const { activities } = useContext(ActivityContext);

  const events = Object.entries(activities).flatMap(([date, activities]) =>
    activities.map(activity => ({
      title: activity.name,
      start: new Date(`${date} ${activity.startTime}`),
      end: new Date(`${date} ${activity.endTime}`),
      description: activity.description,
      importance: activity.importance,
      course: activity.course,
    }))
  );

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        }}
        selectable={true}
        selectMirror={true}
        weekends={true}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  );
}

// Custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
