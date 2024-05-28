import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar.jsx";

import { useNavigate } from "react-router-dom";

export function UserProfileAdmin() {
  const [user, setUser] = useState(null);
  const [newCourse, setNewCourse] = useState("");
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);
  const [newTask, setNewTask] = useState({
    nombreTarea: "",
    descripcion: "",
    fechaEntrega: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Cambia el fondo del body cuando se monta el componente
    document.body.classList.add("bg-gray-900", "text-white");

    // Limpia el estilo cuando se desmonta el componente
    return () => {
      document.body.classList.remove("bg-gray-900", "text-white");
    };
  }, []);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  const handleAddCourse = () => {
    if (newCourse) {
      const updatedUser = {
        ...user,
        cursos: [...user.cursos, { nombreCurso: newCourse, tareas: [] }]
      };
      setUser(updatedUser);
      localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = users.map((u) =>
        u.nombreUsuario === user.nombreUsuario ? updatedUser : u
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      setNewCourse("");
    }
  };

  const handleAddTask = () => {
    if (
      selectedCourseIndex !== null &&
      newTask.nombreTarea &&
      newTask.descripcion &&
      newTask.fechaEntrega
    ) {
      const updatedCourses = user.cursos.map((curso, index) => {
        if (index === selectedCourseIndex) {
          return {
            ...curso,
            tareas: [...curso.tareas, newTask]
          };
        }
        return curso;
      });

      const updatedUser = {
        ...user,
        cursos: updatedCourses
      };

      setUser(updatedUser);
      localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = users.map((u) =>
        u.nombreUsuario === user.nombreUsuario ? updatedUser : u
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      setNewTask({ nombreTarea: "", descripcion: "", fechaEntrega: "" });
    }
  };

  return (
    <>
      <Navbar />
    
      <div className="flex items-center justify-center">
        <div className="bg-gray-700 mt-20 text-white p-10 rounded-lg shadow-lg flex items-center space-x-8">
          <div>
            <img
              className="h-48 w-48 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
            />
          </div>
          <div className="h-60 border-l-4 border-gray-400"></div>
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold m-10">
              Información de usuario
            </h2>
            {user ? (
              <>
                <div className="w-full bg-gray-800 p-3 mb-5 rounded-md">
                  <h3 className="text-lg font-semibold">Nombre de usuario: {user.nombreUsuario}</h3>
                </div>
                <div className="w-full bg-gray-800 p-3 mb-5 rounded-md">
                  <p>Correo electrónico: {user.correo}</p>
                </div>
                <div className="w-full bg-gray-800 p-3 mb-5 rounded-md">
                  <p>Teléfono: {user.telefono}</p>
                </div>
                <div className="w-full bg-gray-800 p-3 mb-5 rounded-md">
                  <p>Número de carnet: {user.carnet}</p>
                </div>

                <div className="w-full mt-10">
                  <h2 className="text-2xl font-semibold mb-5">Agregar Curso</h2>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md bg-gray-800 text-white"
                    placeholder="Nombre del curso"
                    value={newCourse}
                    onChange={(e) => setNewCourse(e.target.value)}
                  />
                  <button
                    onClick={handleAddCourse}
                    className="mt-3 px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-700"
                  >
                    Agregar Curso
                  </button>
                </div>

                <div className="w-full mt-10">
                  <h2 className="text-2xl font-semibold mb-5">Agregar Tarea</h2>
                  <select
                    className="w-full p-2 rounded-md bg-gray-800 text-white mb-3"
                    value={selectedCourseIndex || ""}
                    onChange={(e) => setSelectedCourseIndex(parseInt(e.target.value))}
                  >
                    <option value="" disabled>Seleccionar Curso</option>
                    {user && user.cursos && user.cursos.map((curso, index) => (
                      <option key={index} value={index}>
                        {curso.nombreCurso}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md bg-gray-800 text-white mb-3"
                    placeholder="Nombre de la tarea"
                    value={newTask.nombreTarea}
                    onChange={(e) => setNewTask({ ...newTask, nombreTarea: e.target.value })}
                  />
                  <input
                    type="text"
                    className="w-full p-2 rounded-md bg-gray-800 text-white mb-3"
                    placeholder="Descripción de la tarea"
                    value={newTask.descripcion}
                    onChange={(e) => setNewTask({ ...newTask, descripcion: e.target.value })}
                  />
                  <input
                    type="date"
                    className="w-full p-2 rounded-md bg-gray-800 text-white mb-3"
                    value={newTask.fechaEntrega}
                    onChange={(e) => setNewTask({ ...newTask, fechaEntrega: e.target.value })}
                  />
                  <button
                    onClick={handleAddTask}
                    className="mt-3 px-4 py-2 bg-green-500 rounded-md hover:bg-green-700"
                  >
                    Agregar Tarea
                  </button>
                </div>
              </>
            ) : (
              <p>No hay usuario logueado</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
