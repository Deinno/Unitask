import React, { createContext, useState } from 'react';

const ActivityContext = createContext();

const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState({});

  const saveActivity = (date, newActivity) => {
    const dateKey = date.toDateString();
    setActivities((prev) => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), newActivity],
    }));
  };

  return (
    <ActivityContext.Provider value={{ activities, saveActivity }}>
      {children}
    </ActivityContext.Provider>
  );
};

export { ActivityContext, ActivityProvider };
