import React, { Component } from 'react';
import $ from 'jquery';
import WeatherCards from './WeatherCards';
import Hourly from './Hourly'


class Weathrly extends Component {
  constructor() {
    super();
    this.state = {
      locationState: 'CO',
      locationCity: 'Denver',
      weatherText: {},
      weatherSimple: {},
      weatherHourly: [],
    };
  }

  submitLocation({ city, state }) {
    let searchCity  = city  || this.state.locationCity
    let searchState = state || this.state.locationState

    $.get(this.props.source + 'forecast/q/' + searchState +  '/' + searchCity + '.json').then((data) => {
      this.setState({
        weatherText: data.forecast.txt_forecast,
        weatherSimple: data.forecast.simpleforecast
      })
    });
   $.get(this.props.source + 'hourly/q/' + searchState +  '/' + searchCity + '.json').then((data2) => {
     this.setState({
       weatherHourly: data2.hourly_forecast.slice(0,7),
      })
    });
    this.setInLocalStorage();
  }

  setInLocalStorage (){
    localStorage.setItem('lastCity', this.state.locationCity)
    localStorage.setItem('lastState', this.state.locationState)
  };

  componentDidMount(){

    let localStorageCity  = localStorage.getItem('lastCity')
    let localStorageState = localStorage.getItem('lastState')
    this.submitLocation({ city: localStorageCity, state: localStorageState })
  }

  render() {
    return (
      <div className='forcast-today'>
        <input type='text' placeholder="city" value={ this.state.locationCity } onChange={(e) => this.setState({ locationCity: e.target.value })} />
        <input type='text' value={ this.state.locationState } onChange={(e) => this.setState({ locationState: e.target.value })} />
        <input type='submit' disabled={!this.state.locationCity} onClick={ this.submitLocation.bind(this) }></input>
        <section></section>
        <WeatherCards weatherText={ this.state.weatherText } weatherSimple={ this.state.weatherSimple } city={this.state.locationCity}/>
        <Hourly weatherHourly={ this.state.weatherHourly }/>
      </div>
    );
  }
}



export default Weathrly;
