import React, { useContext } from "react";
import './index.css';
import { ActivityContext } from './ActivityContext';

export function ActivityCard() {
    
    const { activities } = useContext(ActivityContext);
    const allActivities = Object.values(activities).flat();

    return (
          <div className="activity-section rounded-b-lg bg-gray-100 overflow-auto">
            <div className="flex-col mt-4 mx-10 ">
            {allActivities.length > 0 ? (
              allActivities.map((activity, index) => (
                <div key={index} className="card p-4 bg-white rounded shadow-md">
                  <h3 className="text-lg font-semibold">{activity.name}</h3>
                  <p className="text-sm">Curso: {activity.course}</p>
                  <p className="text-sm">Importancia: {activity.importance}</p>
                  <p className="text-sm">{activity.description}</p>
                </div>
              ))
            ) : (
              <p className="mt-20">No hay actividades</p>
            )}
          </div>
        </div>
      );
    
}
