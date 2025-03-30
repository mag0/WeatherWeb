import React, { useContext, useState } from 'react';
import LanguageContext from '../context/LanguageContext';
import idiomas from '../utils/languages.js';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {idioma, setIdioma} = useContext(LanguageContext);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const cambiarIdioma = (sigla) => {
    setIdioma(sigla); 
    setIsOpen(false);
  };

  function pasajeSigla(sigla) {
    const idiomaEncontrado = idiomas.find((item) => item.sigla === sigla);
    return idiomaEncontrado ? idiomaEncontrado.nombre : ""; // Devuelve el nombre del idioma o una cadena vacía si no se encuentra
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Weather</span>
        </a>
        <div className="relative inline-block text-left">
          <button
            onClick={toggleDropdown}
            className="cursor-pointer inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <img src={`/languages/${pasajeSigla(idioma).toLowerCase()}.svg`} alt={idioma} className="h-3.5 w-3.5 rounded-full mr-2" />
            {pasajeSigla(idioma)}
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`absolute right-0 z-50 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isOpen ? '' : 'hidden'}`}
          >
            <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdown-button">
              {
                idiomas.map((item)=>(
                  <li key={item.sigla} onClick={() => cambiarIdioma(item.sigla)}>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-blue-100">
                      <img src={`/languages/${item.nombre.toLowerCase()}.svg`} alt={item.nombre} className="h-3.5 w-3.5 rounded-full mr-2" />
                      {item.nombre}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;