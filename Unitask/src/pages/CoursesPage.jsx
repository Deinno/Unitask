import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import { useNavigate } from "react-router-dom";
import "../index.css";

export function CoursesPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="bg-gray-700 mt-20 text-white p-10 rounded-lg shadow-lg flex flex-col items-center space-y-8 w-full max-w-4xl">
          <h2 className="text-3xl font-semibold">Cursos Matriculados</h2>
          {user ? (
            user.cursos.map((curso, index) => (
              <div key={index} className="w-full">
                <h3 className="text-xl font-semibold bg-gray-800 p-3 rounded-md">{curso.nombreCurso}</h3>
                <div className="mt-3 space-y-3">
                  {curso.tareas.map((tarea, idx) => (
                    <div key={idx} className="bg-gray-800 p-3 rounded-md">
                      <h4 className="text-lg font-semibold">{tarea.nombreTarea}</h4>
                      <p>{tarea.descripcion}</p>
                      <p>Fecha de entrega: {tarea.fechaEntrega}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>No hay información de cursos disponible.</p>
          )}
        </div>
      </div>
    </>
  );
}
