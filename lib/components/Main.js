import React, { Component } from 'react';
import Weathrly from './Weathrly'

class Main extends Component {
  render() {
    return (
      <div>
        <Weathrly source='http://weatherly-api.herokuapp.com/api/weather' />
      </div>
    );
  }
}


export default Main;