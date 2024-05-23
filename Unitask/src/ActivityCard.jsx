import React, { useContext } from "react";
import './index.css';
import { ActivityContext } from './ActivityContext';

export function ActivityCard() {
    
    const { activities } = useContext(ActivityContext);
    const allActivities = Object.values(activities).flat();

    return (
          <div className="activity-section rounded-lg bg-gray-100 overflow-auto">
          <div className="sticky top-0 bg-blue-100 p-4 rounded-t-lg">
                <h2 className="text-xl mb-0 font-bold">Actividades</h2>
            </div>
            <div className="flex flex-col mt-4">
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
