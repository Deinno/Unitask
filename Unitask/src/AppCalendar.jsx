import React, { useContext, useState } from 'react';
import './index.css';
import { Calendar } from 'react-calendar';
import Modal from './Modal';
import { ActivityContext } from './ActivityContext';

export function AppCalendar({ activities }) {
    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { saveActivity } = useContext(ActivityContext);

    const courses = ["Matemáticas", "Ciencias", "Historia", "Arte"];
    const importances = ["Baja", "Media", "Alta"];

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const tileContent = ({ date }) => {
        const dateKey = date.toDateString();
        if (activities[dateKey] && activities[dateKey].length > 0) {
            return <div className="dot"></div>;
        }
        return null;
    };

    const handleDayClick = (clickedDate) => {
        if (selectedDate && selectedDate.toDateString() === clickedDate.toDateString()) {
            openModal();
        } else {
            setSelectedDate(clickedDate);
            setDate(clickedDate);
        }
    };

    return (
        <div>
            <Calendar
                value={date}
                onChange={setDate}
                prev2Label={null} // Para ocultar el botón de retroceder dos años
                next2Label={null} // Para ocultar el botón de avanzar dos años
                tileContent={tileContent}
                onClickDay={handleDayClick}
                className="react-calendar"
            />
            {isModalOpen && (
                <Modal
                    date={date}
                    courses={courses}
                    importances={importances}
                    onClose={closeModal}
                    onSave={(newActivity) => saveActivity(selectedDate, newActivity, closeModal)}
                />
            )}
        </div>
    );
}



