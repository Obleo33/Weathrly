import React from 'react';

const Hourly = ({ weatherHourly }) => {
  if(!weatherHourly.length) {
    return(
      <div></div>
    )
  } else {
    return(
      <div className='hourly-forcast'>
      {weatherHourly.map((obj, i) => {
        
        return(
          <div className='hourly-card' key={i}>
            <p>Hour: {obj.FCTTIME.civil}</p>
            <p>Temp: {obj.temp.english + '°' }</p>
            <p>Condition: {obj.condition}</p>
          </div>
        )
      })}
    </div>
    )
  }
}

export default Hourly;
