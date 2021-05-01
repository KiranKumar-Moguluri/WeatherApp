  
import React from 'react'

export default function CityWeather({weather}) {
    return (
        <div>
        <p>Name:{weather?.name}</p>
        <p>Temperature:{weather?.main?.temp}</p>
        <p>Humidity:{weather?.main?.humidity}</p>
        <p>Pressure:{weather?.main?.pressure}</p>
        </div>
    )
}
