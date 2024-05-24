import React, { createContext, useState, useEffect } from 'react';

const ActivityContext = createContext();

const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState(() => {
    // Cargar actividades desde localStorage al inicializar
    const savedActivities = localStorage.getItem('activities');
    return savedActivities ? JSON.parse(savedActivities) : {};
  });

  const saveActivity = (date, newActivity) => {
    const dateKey = date.toDateString();
    const updatedActivities = {
      ...activities,
      [dateKey]: [...(activities[dateKey] || []), newActivity],
    };

    setActivities(updatedActivities);
    localStorage.setItem('activities', JSON.stringify(updatedActivities)); // Guardar en localStorage
  };

  useEffect(() => {
    // Guardar actividades en localStorage cada vez que cambian
    localStorage.setItem('activities', JSON.stringify(activities));
  }, [activities]);

  return (
    <ActivityContext.Provider value={{ activities, saveActivity }}>
      {children}
    </ActivityContext.Provider>
  );
};

export { ActivityContext, ActivityProvider };
