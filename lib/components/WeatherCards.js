import React from 'react';

const WeatherCards = ({ weather }) => {
  if(!weather.length){
    return (
      <div>
        Please enter a proper location
      </div>
    )
  }
  return (
    <div>
      {weather.map((weather, index)=> {
        return (
          <div key={index}>
            <p> Location: { weather.location }</p>
            <p> Weather: { weather.weatherType.type }</p>
            <p> High Temp: { weather.temp.high }</p>
            <p> Low Temp: { weather.temp.low }</p>
          </div>
        )
      })}
    </div>
  )
}




export default WeatherCards;