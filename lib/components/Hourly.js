import React from 'react';

const Hourly = ({ weatherHourly, notFound }) => {
  if(notFound){
    return(
      <div className='hourly-container'></div>
    )
  } else {
    return(
      <div className='hourly-container'>
      {weatherHourly.map((obj, i) => {

        return(
          <article className='hourly-card' key={ i }>
            <div className='hourly-hour hourly'> { obj.FCTTIME.civil }</div>
            <div className='hourly-img-container'>
              <img className='hourly-img hourly' src={ obj.icon_url } alt={ obj.icon + ' image' }/>
            </div>
            <div className='hourly-temp hourly'> { obj.temp.english + '°' } </div>
          </article>
        )
      })}
    </div>
    )
  }
}

export default Hourly;
