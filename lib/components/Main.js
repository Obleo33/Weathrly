import React, { Component } from 'react';
import Weathrly from './Weathrly'

class Main extends Component {
  render() {
    return (
      <div>
        <Weathrly source='http://api.wunderground.com/api/395c3eaa19684a65/geolookup/hourly/forecast10day/q/' />
      </div>
    );
  }
}


export default Main;
