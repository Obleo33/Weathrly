import React from 'react';

const WeatherCards = ({ location, weatherText, weatherSimple, conditions, notFound }) => {

  if (notFound) {
    return (
      <div className='welcome'>{ notFound }</div>
    );
  }

  if (!weatherText.forecastday) {
    return (
      <div className='welcome'>
        Find Your Nearest Weather Station
      </div>
    );
  }


  if (notFound === null) {
    return (
      <div className='forecast-today'>
        <section className='location'>
          <div className='city location-today today'>{ location.city }</div>
          <div className='state location-today today'>{ location.state }</div>
        </section>

        <section className='cal'>
          <div className='day cal-today today'>{ weatherSimple.forecastday[0].date.weekday_short }</div>
          <div className='month cal-today today'>{ weatherSimple.forecastday[0].date.monthname_short }</div>
          <div className='day-num cal-today today'>{ weatherSimple.forecastday[0].date.day }</div>
        </section>

        <div className='temp today'>{ conditions.temp_f + '°' }</div>

        <section className='hi-low'>
          <div className='temp-high today'>HIGH: { weatherSimple.forecastday[0].high.fahrenheit + '°' }</div>
          <div className='temp-low today'>LOW: { weatherSimple.forecastday[0].low.fahrenheit + '°' }</div>
        </section>

        <div className='condition today'>{ weatherSimple.forecastday[0].conditions }</div>
        <div className='condition-summary today'> { weatherText.forecastday[0].title } Summary: { weatherText.forecastday[0].fcttext }</div>
      </div>
    );
  }
};

export default WeatherCards;
