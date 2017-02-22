import React from 'react';

const WeatherCards = ({ weatherText, weatherSimple, city }) => {
  if(!weatherText.forecastday) {
    return (
      <div>
        please whatevers
      </div>
    )
  }

  return (

    <div>
      <p>Conditions Today in {city}: { weatherSimple.forecastday[0].conditions  }</p>
      <p>Day Today: { weatherSimple.forecastday[0].date.weekday_short }</p>
      <p>Month: { weatherSimple.forecastday[0].date.monthname_short }</p>
      <p>The: { weatherSimple.forecastday[0].date.day }</p>
      <p>Year: { weatherSimple.forecastday[0].date.year }</p>
      <p>Today's High: { weatherSimple.forecastday[0].high.fahrenheit + '°' }</p>
      <p>Today's Low: { weatherSimple.forecastday[0].low.fahrenheit + '°' }</p>
      <p> { weatherText.forecastday[0].title } Summary: { weatherText.forecastday[0].fcttext }</p>

    </div>
  )
}





export default WeatherCards;