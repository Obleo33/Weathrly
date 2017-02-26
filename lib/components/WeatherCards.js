import React from 'react';

const WeatherCards = ({ weatherText, weatherSimple, city, conditions }) => {
    if(!weatherText.forecastday) {
      return (
        <div>
          please whatevers
        </div>
      )
    }

    return (

    <div class='forcast-today'>

      <div class='location'>
        <div class='city location-today today'>{city}</div>
        <div class='state location-today today'>CO</div>
      </div>
      <div class='cal'>
        <div class='day cal-today today'>{ weatherSimple.forecastday[0].date.weekday_short }</div>
        <div class='month cal-today today'>{ weatherSimple.forecastday[0].date.monthname_short }</div>
        <div class='day-num cal-today today'>{ weatherSimple.forecastday[0].date.day }</div>
      </div>
      <div class='temp today'>{ conditions.temp_f + '°' }</div>
      <div class='hi-low'>
       <div class='temp-high today'>HIGH: { weatherSimple.forecastday[0].high.fahrenheit + '°' }</div>
       <div class='temp-low today'>LOW: { weatherSimple.forecastday[0].low.fahrenheit + '°' }</div>
      </div>
      <div class='condition today'>{ weatherSimple.forecastday[0].conditions }</div>
      <p> { weatherText.forecastday[0].title } Summary: { weatherText.forecastday[0].fcttext }</p>

    </div>
  )
}

export default WeatherCards;
