import React, { Component } from 'react';

class NavBar extends Component {
  constructor(){
    super()
    this.state = {
      locationCity: '',
      locationState: '',
    }
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleClick(){
    this.props.submit({city: this.state.locationCity, state: this.state.locationState});
    this.state.locationCity = '';
    this.state.locationState = '';
  }

  handleEnter(e){
    if(e.key === 'Enter'){
      this.handleClick();
    }
  }

  render(){
    return(
      <div className='nav-bar'>
        <input
          className='inputs'
          id='input-city'
          type='text'
          placeholder="city or zipcode"
          value={ this.state.locationCity }
          onChange={(e) => this.setState({ locationCity: e.target.value })}
          onKeyPress={(e) => this.handleEnter(e)}/>

        <input
          className='inputs'
          id='input-state'
          type='text'
          placeholder="state"
          value={ this.state.locationState }
          onChange={(e) => this.setState({ locationState: e.target.value })}
          onKeyPress={(e) => this.handleEnter(e)}/>

        <input
          className='inputs'
          id='submit-btn'
          type='submit'
          disabled={!this.state.locationCity}
          onClick={()=> this.handleClick()} />
      </div>
    )
  }
}


export default NavBar;



