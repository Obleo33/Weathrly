import React, { Component } from 'react';
import $ from 'jquery';
import WeatherCards from './WeatherCards';


class Weathrly extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      weather: []
    };
  }

  submitLocation(e) {
    e.preventDefault();
    $.get(this.props.source + '/' + this.state.location).then((data) => {
      this.setState({weather: data})
    });
  }

  render() {
    return (
      <div>
        <input type='text' value={ this.state.location } onChange={(e) => this.setState({ location: e.target.value })} />
        <input type='submit' disabled={!this.state.location} onClick={ this.submitLocation.bind(this) }></input>
        <section></section>
        <WeatherCards weather={ this.state.weather } />
      </div>
    );
  }
}

export default Weathrly;