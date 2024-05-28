import React, { useState,useEffect } from "react";
import raccoonIcon from "../assets/raccoon.svg"; // Asegúrate de ajustar la ruta según tu estructura de archivos
import { Navbar } from "../Navbar";
import "../index.css";
import { useNavigate } from "react-router-dom";

export function UserProfile() {

  const [user, setUser] = useState(null);
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
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login"); 
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
                <h3 className="text-lg font-semibold">Nombre de usuario: {user.username}</h3>
              </div>
              <div className="w-full bg-gray-800 p-3 mb-5 rounded-md">
                <p>Correo electrónico: {user.email}</p>
              </div>
              <div className="w-full bg-gray-800 p-3 mb-5 rounded-md">
                <p>Teléfono: {user.phone}</p>
              </div>
              <div className="w-full bg-gray-800 p-3 mb-5 rounded-md">
                <p>Número de carnet: {user.idNumber}</p>
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
