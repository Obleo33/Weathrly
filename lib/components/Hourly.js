import React from 'react';

const Hourly = ({ weatherHourly }) => {
  if(!weatherHourly.length) {
    return(
      <div></div>
    )
  } else {
    return(
      <div className='hourly-container'>
      {weatherHourly.map((obj, i) => {

        return(
          <article className='hourly-card'>
            <div className='hourly-hour hourly'> { obj.FCTTIME.civil }</div>
            <div className='hourly-temp hourly'> { obj.temp.english + '°' } </div>
            <img className='hourly-img hourly' src={ obj.icon_url } alt={ obj.icon + ' image' }/>
          </article>
        )
      })}
    </div>
    )
  }
}

export default Hourly;
