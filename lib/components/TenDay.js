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
            <div className='ten-day-day-container ten-day'>
              <div className='ten-day-day'>{ obj.date.weekday_short }</div>
              <div className='ten-day-day-detail'>{ obj.date.monthname_short } { obj.date.day }</div>
            </div>
            <div className='ten-day-img-container ten-day'>
              <img className='ten-day-img ten-day' src={ obj.icon_url } alt={ obj.icon + ' icon' } />
            </div>
              <div className='ten-day-high ten-day'>HIGH: { obj.high.fahrenheit + '°' }</div>
              <div className='ten-day-low ten-day'>LOW: { obj.low.fahrenheit + '°' }</div>
          </article>
        )
      })}
    </div>
    )
  }
}

export default TenDay;
