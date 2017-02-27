import React from 'react';

class NavBar extends React.Component {
  constructor(){
    super()
    this.state = {
      locationCity: '',
      locationState: '',
    }
  }

  handleClick(){
    this.props.submit({city: this.state.locationCity, state: this.state.locationState})
  }

  render(){
    return(
      <div className='forecast-today'>
        <input id='input-city' type='text' placeholder="city or zipcode" value={ this.state.locationCity } onChange={(e) => this.setState({ locationCity: e.target.value })} />
        <input id='input-state' type='text' placeholder="state"value={ this.state.locationState } onChange={(e) => this.setState({ locationState: e.target.value })} />
        <input id='submit-btn' type='submit' disabled={!this.state.locationCity} onClick={()=> this.handleClick()} />
      </div>
    )
  }
}


export default NavBar;

