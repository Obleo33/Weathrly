import React from 'react';

const Hourly = ({ weatherHourly, notFound }) => {
  if (notFound || weatherHourly.length === 0) {
    return (
      <div></div>
    );
  } else {
    return (
      <div
        className='hourly-container'
        tabIndex='0'>
        <h2 className='hourly-title'>HOURLY FORECAST:</h2>
        {weatherHourly.map((obj, i) => {

          return (
            <article
              className='hourly-card'
              tabIndex='0'
              key={ i }>
              <div className='hourly-hour hourly'> { obj.FCTTIME.civil }</div>
              <div className='hourly-img-container'>
                <img
                  className='hourly-img hourly'
                  src={ obj.icon_url }
                  alt={ obj.icon + ' image' }/>
              </div>
              <div className='hourly-temp hourly'> { obj.temp.english + '°' } </div>
            </article>
          );
        })}
      </div>
    );
  }
};

export default Hourly;
