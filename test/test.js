import { shallow, mount, render } from 'enzyme';
import {expect, assert }          from 'chai';
import React                      from 'react';
import Main from '../lib/components/Main';
import Weathrly from '../lib/components/Weathrly';


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

  it('should populate our simpleforecast on click event', () => {
    const wrapper    = shallow(<Weathrly />);
    const inputCity  = wrapper.find('#input-city');
    const inputState = wrapper.find('#input-state');
    const submitBtn  = wrapper.find('#submitBtn')

    inputCity.simulate('change', { target: { value: 'denver' }})
    inputState.simulate('change', { target: { value: 'CO' }})
    // console.log(submitBtn.simulate('click'))




  })
})



//   it('lets make sure our shit is rendering', () => {
//     const item      = [{id: 1, input: 'steam roller'}, {id: 2, input: 'suh'}]
//     const wrapper   = shallow( <RenderList listItems={item} /> )
//     let {id, input} = wrapper.find('Item').get(1).props
//     console.log(id)
//
//     expect(wrapper.find('Item').length).to.equal(2)
//     expect(wrapper.find('Item').get(1).props.id).to.equal(id)
//     expect(wrapper.find('Item').get(1).props.input).to.equal(input)
// })
