import React, { useState } from 'react';

const Modal = ({ date, courses, importances, onClose, onSave }) => {
  const [course, setCourse] = useState(courses[0]);
  const [name, setName] = useState("");
  const [importance, setImportance] = useState(importances[0]);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivity = { course, name, importance, description };
    onSave(newActivity);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Agregar actividad para {date.toDateString()}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Curso</label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              {courses.map((course, index) => (
                <option key={index} value={course}>{course}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre de la Actividad</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Importancia</label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={importance}
              onChange={(e) => setImportance(e.target.value)}
            >
              {importances.map((importance, index) => (
                <option key={index} value={importance}>{importance}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Descripción</label>
            <textarea
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded-md">Cancelar</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
