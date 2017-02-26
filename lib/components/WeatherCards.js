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

    <div className='forcast-today'>

      <div className='location'>
        <div className='city location-today today'>{city}</div>
        <div className='state location-today today'>CO</div>
      </div>
      <div className='cal'>
        <div className='day cal-today today'>{ weatherSimple.forecastday[0].date.weekday_short }</div>
        <div className='month cal-today today'>{ weatherSimple.forecastday[0].date.monthname_short }</div>
        <div className='day-num cal-today today'>{ weatherSimple.forecastday[0].date.day }</div>
      </div>
      <div className='temp today'>{ conditions.temp_f + '°' }</div>
      <div className='hi-low'>
       <div className='temp-high today'>HIGH: { weatherSimple.forecastday[0].high.fahrenheit + '°' }</div>
       <div className='temp-low today'>LOW: { weatherSimple.forecastday[0].low.fahrenheit + '°' }</div>
      </div>
      <div className='condition today'>{ weatherSimple.forecastday[0].conditions }</div>
      <div className='condition-summary today'> { weatherText.forecastday[0].title } Summary: { weatherText.forecastday[0].fcttext }</div>

    </div>
  )
}

export default WeatherCards;
