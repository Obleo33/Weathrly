import { shallow, mount, render } from 'enzyme';
import {expect, assert }          from 'chai';
import React                      from 'react';
import sinon                      from 'sinon';
import Main                       from '../lib/components/Main';
import Weathrly                   from '../lib/components/Weathrly';
import WeatherCards               from '../lib/components/WeatherCards';
import TenDay                     from '../lib/components/TenDay';
import Hourly                     from '../lib/components/Hourly';
import Data                       from './helpers/mock-api-data';
import NavBar                     from '../lib/components/NavBar';
require ('locus')

describe('testing weathrly', () => {
  it('Main should contain a component called Weathrly', () => {
    const wrapper = shallow( <Main /> )
    expect(wrapper.find('Weathrly')).to.have.length(1)
  })

  it('Weathrly should contain a component called WeatherCards', () => {
    const wrapper = shallow( <Weathrly /> )
    expect(wrapper.find('WeatherCards')).to.have.length(1)
  })

  it('Weathrly should contain a component called NavBar', () => {
    const wrapper = shallow( <Weathrly /> )
    expect(wrapper.find('NavBar')).to.have.length(1)
  })

  it('Weathrly should have a default state weatherText that is an empty object ', () => {
    const wrapper        = shallow( <Weathrly /> );
    const stateOfWrapper = wrapper.state();

    expect(stateOfWrapper.weatherText).to.deep.equal({})
  })

  it('Weathrly should have a default state weatherSimple that is an empty object ', () => {
    const wrapper        = shallow( <Weathrly /> );
    const stateOfWrapper = wrapper.state();

    expect(stateOfWrapper.weatherSimple).to.deep.equal({})
  })

  it('should simulate submitBTN click event', () => {
    sinon.spy(Weathrly.prototype, 'submitLocation')
    const wrapper = mount( <Weathrly/> )

    wrapper.find('#submit-btn').simulate('click')

    expect(Weathrly.prototype.submitLocation.calledOnce).to.equal(true)
  })

  it('lets make sure our WeatherCards component is rendering', () => {
    const wrapper  = shallow( <WeatherCards
      location={Data.location}
      weatherText={Data.forecast.txt_forecast}
      weatherSimple={Data.forecast.simpleforecast}
      conditions={Data.current_observation}
      notFound={null} /> )

      expect(wrapper.find('.forecast-today').length).to.equal(1)
      expect(wrapper.find('.today').length).to.equal(10)
  })
})

describe('testing NavBar component', () => {
  it('NavBar should have a default state of locationCity', () => {
    const wrapper        = shallow( <NavBar /> );
    const stateOfWrapper = wrapper.state();

    expect(stateOfWrapper.locationCity).to.equal('')
  })

  it('NavBar should have a default state of locationState', () => {
    const wrapper        = shallow( <NavBar /> );
    const stateOfWrapper = wrapper.state();

    expect(stateOfWrapper.locationState).to.equal('')
  })

  it('should change locationCity state with a change of the city input ', () => {
    const wrapper   = shallow( <NavBar /> );
    const inputCity = wrapper.find('#input-city');

    inputCity.simulate('change', { target: { value: 'suh' }})

    const stateOfWrapper = wrapper.state()
    expect(stateOfWrapper.locationCity).to.equal('suh')
  })

  it('should change locationState state with a change of the state input ', () => {
    const wrapper    = shallow( <NavBar /> );
    const inputState = wrapper.find('#input-state');

    inputState.simulate('change', { target: { value: 'bru' }})

    const stateOfWrapper = wrapper.state()
    expect(stateOfWrapper.locationState).to.equal('bru')
  })
  it('our NavBar component should render', () => {
    const wrapper  = shallow( <NavBar /> )

    expect(wrapper.find('.nav-bar').length).to.equal(1)
    expect(wrapper.find('.inputs').length).to.equal(3)
  })
})

describe('testing TenDay component', () => {
  it('our TenDay component should render', () => {
    const wrapper  = shallow( <TenDay
      weatherText={Data.forecast.txt_forecast}
      weatherSimple={Data.forecast.simpleforecast}
      notFound={null} /> )

      expect(wrapper.find('.ten-day-card').length).to.equal(10)
      expect(wrapper.find('.ten-day-high').length).to.equal(10)
      expect(wrapper.find('.ten-day-low').length).to.equal(10)
    })
  })

describe('testing Hourly component', () => {
  it('our Hourly component should render', () => {
    const wrapper  = shallow( <Hourly
      weatherHourly={Data.hourly_forecast}
      notFound={null} /> )

      expect(wrapper.find('.hourly-card').length).to.equal(7)
      expect(wrapper.find('.hourly-temp').length).to.equal(7)
      expect(wrapper.find('.hourly-hour').length).to.equal(7)
      expect(wrapper.find('.hourly-img').length).to.equal(7)
    })
  })
