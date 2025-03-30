import React from 'react'
import windyIcon from '/img/windy.svg'
import humidityIcon from '/img/humidity.svg'
import pressureIcon from '/img/pressure.svg'

const Card = ({fecha, temp, tempmax, tempmin, description, icon, wind, pressure, humidity}) => {

    const image = `/img/${icon}.png`;

  return (
    <>
        <div className="w-96 h-96 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5 flex flex-col items-center text-white h-full">
                <div>
                    <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{fecha}</h5>
                </div>
                <div>
                    <img className="rounded-t-lg" src={image || ""} alt={icon} />
                </div>
                <div className="">
                    <p>{description}</p>
                </div>
                <div>
                    <p className="p-2 text-2xl font-bold">{temp} C°</p>
                </div>
                <div className="flex items-center gap-2">
                    <img src={windyIcon} alt="icono de viento" />
                    <p>{wind} km/h</p>
                </div>
                <div className="flex items-center gap-2">
                    <img src={humidityIcon} alt="icono de humedad" />
                    <p>{humidity} %</p>
                </div>
                <div className="flex items-center gap-2">
                    <img src={pressureIcon} alt="icono de presión" />
                    <p>{pressure} hPa</p>
                </div>
                <div>
                    <p className="p-2 font-bold">Tmin {tempmin} C° - Tmax {tempmax} C°</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card