import React from 'react';

const TenDay = ({ weatherText, weatherSimple, city  }) => {
  if(!weatherText.forecastday) {
    return (
      <div id='ten-day'></div>
    )
  } else {
    return(
      <div id='ten-day'>
      {weatherSimple.forecastday.map((obj, i) => {

        return(
          <div className='day-card' key={i}>
            <p>Day: { obj.date.weekday_short }</p>
            <p>Month: { obj.date.monthname_short }</p>
            <p>The: { obj.date.day }</p>
            <p>Year: { obj.date.year }</p>
            <p>High: { obj.high.fahrenheit + '°' }</p>
            <p>Low: { obj.low.fahrenheit + '°' }</p>
            <p>-----------------------------------------</p>
          </div>
        )
      })}
    </div>
    )
  }
}

export default TenDay;
