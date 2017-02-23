import React from 'react';

const Hourly = ({ weatherHourly }) => {
  if(weatherHourly.length<1) {
    return(
      <div></div>
    )
  } else {
    return(
      <div className='hourly-forcast'>
      {weatherHourly.map((a,i) => {
        let obj = weatherHourly[i];
        return(
          <div className='hourly-card'>
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
