import React, { useState, useContext } from 'react';
import LanguageContext from '../context/LanguageContext'; // Importa el contexto de idioma

const Buscador = ({ setCiudad }) => {
  const [input, setInput] = useState("");
  const { idioma } = useContext(LanguageContext); // Obtiene el idioma actual del contexto

  // Diccionario para traducir "Buscar" según el idioma
  const traducciones = {
    es: "Buscar",
    en: "Search",
    de: "Suchen",
    fr: "Chercher",
    it: "Cerca",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCiudad(input);
  };

  return (
    <>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          {traducciones[idioma] || traducciones["es"]} {/* Texto traducido según el idioma */}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            id="default-search"
            className="block w-full p-4 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={idioma === "es" ? "Ingrese ciudad" : "Enter city"} // Placeholder dinámico
            required
          />
          <button
            type="submit"
            className="cursor-pointer text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {traducciones[idioma] || traducciones["es"]} {/* Botón traducido */}
          </button>
        </div>
      </form>
    </>
  );
};

export default Buscador;