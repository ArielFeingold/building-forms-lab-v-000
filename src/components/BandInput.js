// Add BandInput component
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandInput extends Component {

  state = {
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: '',
    })
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event => this.handleSubmit(event))}>
          <label>Band Name:</label>
          <input type="text" onChange={event => this.handleChange(event)} value={this.state.name}></input>
          <input type="submit" />
        </form>

      </div>
    )
  }
}

export default (BandInput);
