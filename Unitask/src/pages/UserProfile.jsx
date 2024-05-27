
import React from 'react';
import raccoonIcon from '../assets/raccoon.svg'; // Asegúrate de ajustar la ruta según tu estructura de archivos
import { Navbar } from "../Navbar";


export function UserProfile() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="bg-gray-700 text-white p-10 rounded-lg shadow-lg flex items-center space-x-8">
        <div>
          <img
            className=" h-max rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
          />
        </div>
        <div className="h-60 border-l-4 border-gray-400"></div>
        <div className="flex flex-col items-center">
  <h2 className="text-3xl font-semibold mb-4">Información de usuario</h2>
  <div className="w-full bg-gray-800 p-2 mb-2 rounded-md">
    <h3 className="text-lg font-semibold">Nombre y Apellidos</h3>
  </div>
  <div className="w-full bg-gray-800 p-2 mb-2 rounded-md">
    <p>Correo electrónico: usuario@ejemplo.com</p>
  </div>
  <div className="w-full bg-gray-800 p-2 mb-2 rounded-md">
    <p>Teléfono: +123 456 7890</p>
  </div>
  <div className="w-full bg-gray-800 p-2 rounded-md">
    <p>Número de carnet: 123456789</p>
  </div>
</div>
      </div>
    </div>
    </>
  );
}

