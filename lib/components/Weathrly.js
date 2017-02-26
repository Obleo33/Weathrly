import React, { Component } from 'react';
import $ from 'jquery';
import WeatherCards from './WeatherCards';
import Hourly from './Hourly'
import TenDay from './TenDay'


class Weathrly extends Component {
  constructor() {
    super();
    this.state = {
      locationState: '',
      locationCity: '',
      weatherText: {},
      weatherSimple: {},
      weatherHourly: [],
      locationData: {},
      conditions: {},
    };
  }

  submitLocation({ city, state }) {
    let searchCity  = city  || this.state.locationCity
    let searchState = state || this.state.locationState

    $.get(this.props.source + searchState +  '/' + searchCity + '.json').then((data) => {
      this.setState({

        weatherText: data.forecast.txt_forecast,
        weatherSimple: data.forecast.simpleforecast,
        weatherHourly: data.hourly_forecast.slice(0,7),
        locationData: data.location,
        conditions: data.current_observation,
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
        <input id='input-city' type='text' placeholder="city or zipcode" value={ this.state.locationCity } onChange={(e) => this.setState({ locationCity: e.target.value })} />
        <input id='input-state' type='text' value={ this.state.locationState } onChange={(e) => this.setState({ locationState: e.target.value })} />
        <input id='submit-btn' type='submit' disabled={!this.state.locationCity} onClick={ this.submitLocation.bind(this) }></input>
        <section></section>
        <WeatherCards location={ this.state.locationData } conditions={ this.state.conditions } weatherText={ this.state.weatherText } weatherSimple={ this.state.weatherSimple }/>
        <Hourly weatherHourly={ this.state.weatherHourly }/>
        <TenDay weatherText={ this.state.weatherText } weatherSimple={ this.state.weatherSimple } city={this.state.locationData.city}/>
      </div>
    );
  }
}



export default Weathrly;
