import React from 'react';

const TenDay = ({ weatherText, weatherSimple, city, notFound  }) => {
  if(notFound){
    return(
      <div></div>
    )
  }
  if(!weatherText.forecastday) {
    return (
      <div className='ten-day-container'></div>
    )
  } else {
    return(
      <div className='ten-day-container'>
      {weatherSimple.forecastday.map((obj, i) => {

        return(
          <article className='ten-day-card' key={ i }>
            <div className='ten-day-day ten-day ten-row'>{ obj.date.weekday_short } { obj.date.monthname_short } { obj.date.day }</div>
            <img className='ten-day-img ten-day ten-row' src={ obj.icon_url } alt={ obj.icon + ' icon' } />
            <div className='ten-day-high-low ten-row'>
              <div className='ten-day-high ten-day'>HIGH: { obj.high.fahrenheit + '°' }</div>
              <div className='ten-day-low ten-day'>LOW: { obj.low.fahrenheit + '°' }</div>
            </div>
          </article>
        )
      })}
    </div>
    )
  }
}

export default TenDay;
