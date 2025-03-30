import React, { useState, useEffect, useContext } from 'react';
import Card from '../components/Card.jsx'
import Buscador from '../components/Buscador.jsx'
import LanguageContext from '../context/LanguageContext.jsx';

const Clima = () => {
  const [data, setData] = useState({days: []});
  const [error, setError] = useState(null);
  const [ciudad, setCiudad] = useState("moreno");
  const {idioma} = useContext(LanguageContext);
  const apiKey = import.meta.env.VITE_KEY;

  useEffect(() => {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${ciudad}?lang=${idioma}&key=${apiKey}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('No se encontró información para esta ciudad.');
        }
        return res.json();
      })
      .then(apiData => { 
        setData(apiData);
        setError(null); 
      })
      .catch(error => {
        console.error('Error al obtener los datos del clima:', error);
        setError(error.message);
      });
  }, [idioma, ciudad, apiKey]);

  function pasajeTemp(temp){
    return ((temp-32)*5/9).toFixed(1)
  }

  function obtenerDiaSemana(fecha, idioma) {
    const diasPorIdioma = {
      es: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      de: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
      fr: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
      it: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
    };

    const [year, month, day] = fecha.split('-');
    const date = new Date(year, month - 1, day);
  
    const dias = diasPorIdioma[idioma] || diasPorIdioma['es'];
  
    return dias[date.getDay()]; 
  }

  return (
    <div className="constainer text-center mb-10 mt-10">
      <Buscador setCiudad={setCiudad}></Buscador>
      {error ? (
        <h1 className="mb-10 text-4xl font-extrabold text-red-600">
          {error}
        </h1>
      ) : (
    <div className='constainer text-center mb-10 mt-10'>
      <h1 className="mb-10 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">
        {data.resolvedAddress}
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-4">
          {
              data.days.slice(0,6).map((item, index)=>(
                <Card 
                key={index} 
                fecha={obtenerDiaSemana(item.datetime, idioma)}
                temp={pasajeTemp(item.temp)}
                tempmax={pasajeTemp(item.tempmax)}
                tempmin={pasajeTemp(item.tempmin)}
                description={item.description}
                icon={item.icon || "icon not found"}
                pressure={item.pressure}
                wind={item.windspeed}
                humidity={item.humidity}
                ></Card>
              ))
            }
      </div>
    </div>
      )}
    </div>
  );
};

export default Clima;