import React, { Component } from 'react';
import $                    from 'jquery';
import WeatherCards         from './WeatherCards';
import Hourly               from './Hourly';
import TenDay               from './TenDay';
import NavBar               from './NavBar';


class Weathrly extends Component {
  constructor() {
    super();
    this.state = {
      weatherText: {},
      weatherSimple: {},
      weatherHourly: [],
      locationData: {},
      conditions: {},
    };
  }

  submitLocation({ city, state }) {
    const searchCity = city || this.state.locationCity;
    const searchState = state || this.state.locationState;

    $.get(this.props.source + searchState +  '/' + searchCity + '.json').then((data) => {
      if (data.forecast === undefined) {
        this.setState({
          notFound: data.response.error.description,
        });
      } else {
        this.setState({
          locationCity: city,
          locationState: state,
          notFound: null,
          weatherText: data.forecast.txt_forecast,
          weatherSimple: data.forecast.simpleforecast,
          weatherHourly: data.hourly_forecast.slice(0, 7),
          locationData: data.location,
          conditions: data.current_observation,
        });
      }
      this.setInLocalStorage();
    });
  }

  setInLocalStorage() {
    localStorage.setItem('lastCity', this.state.locationCity);
    localStorage.setItem('lastState', this.state.locationState);
  }

  componentDidMount() {
    const localStorageCity = localStorage.getItem('lastCity');
    const localStorageState = localStorage.getItem('lastState');
    if (localStorageCity && localStorageState !== 'undefined') {
      this.submitLocation({ city: localStorageCity, state: localStorageState });
    }
  }

  render() {
    return (
      <div id='weathrly'>
        <section id='search'>
          <NavBar submit={this.submitLocation.bind(this)}/>
        </section>
        <section id='forecast'>
          <WeatherCards
            location={ this.state.locationData }
            conditions={ this.state.conditions }
            weatherText={ this.state.weatherText }
            weatherSimple={ this.state.weatherSimple }
            notFound={this.state.notFound}/>
          <section id='more-detail'>
            <Hourly
              weatherHourly={ this.state.weatherHourly }
              notFound={this.state.notFound}/>
            <TenDay
              weatherText={ this.state.weatherText }
              weatherSimple={ this.state.weatherSimple }
              city={this.state.locationData.city}
              notFound={this.state.notFound} />
          </section>
        </section>
      </div>
    );
  }
}


export default Weathrly;
