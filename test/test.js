import { shallow, mount, render } from 'enzyme';
import {expect, assert }          from 'chai';
import React                      from 'react';
import sinon                      from 'sinon';
import Main                       from '../lib/components/Main';
import Weathrly                   from '../lib/components/Weathrly';
import WeatherCards               from '../lib/components/WeatherCards';


require ('locus')

describe('testing wif weathrly', () => {
  it('should have a component called Weathrly', () => {
    const wrapper = shallow(<Main />)
    expect(wrapper.find('Weathrly')).to.have.length(1)
  })

  it('Weathrly should contain a component called WeatherCards', () => {
    const wrapper = shallow(<Weathrly />)
    expect(wrapper.find('WeatherCards')).to.have.length(1)
  })

  it('Weathrly should have a default state of locationCity', () => {
    const wrapper        = shallow(<Weathrly />);
    const stateOfWrapper = wrapper.state();

    expect(stateOfWrapper.locationCity).to.equal('')
  })

  it('Weathrly should have a default state of locationState', () => {
    const wrapper        = shallow(<Weathrly />);
    const stateOfWrapper = wrapper.state();

    expect(stateOfWrapper.locationState).to.equal('')
  })

  it('Weathrly should have a default state weatherText that is an empty object ', () => {
    const wrapper        = shallow(<Weathrly />);
    const stateOfWrapper = wrapper.state();

    expect(stateOfWrapper.weatherText).to.deep.equal({})
  })

  it('Weathrly should have a default state weatherSimple that is an empty object ', () => {
    const wrapper        = shallow(<Weathrly />);
    const stateOfWrapper = wrapper.state();

    expect(stateOfWrapper.weatherSimple).to.deep.equal({})
  })

  it('should change locationCity state with a change of the city input ', () => {
    const wrapper   = shallow(<Weathrly />);
    const inputCity = wrapper.find('#input-city');

    inputCity.simulate('change', { target: { value: 'suh' }})

    const stateOfWrapper = wrapper.state()
    expect(stateOfWrapper.locationCity).to.equal('suh')
  })

  it('should change locationCity state with a change of the city input ', () => {
    const wrapper    = shallow(<Weathrly />);
    const inputState = wrapper.find('#input-state');

    inputState.simulate('change', { target: { value: 'bru' }})

    const stateOfWrapper = wrapper.state()
    expect(stateOfWrapper.locationState).to.equal('bru')
  })

  it('should simulate submitBTN click event', () => {
    sinon.spy(Weathrly.prototype, 'submitLocation')
    const wrapper = mount(<Weathrly/>)

    wrapper.find('#submit-btn').simulate('click')

    expect(Weathrly.prototype.submitLocation.calledOnce).to.equal(true)
  })

  it.only('lets make sure our shit is rendering', () => {
    const city     = {locationCity: 'denver'};
    const forecast = {key: 'weather'}
    const wrapper  = shallow(<WeatherCards city={city} weatherText={forecast} weatherSimple={forecast}/>)

    console.log(wrapper.debug())


  })


})



