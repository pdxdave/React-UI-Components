import React, { Component } from 'react'
import './Display.css';


class CalculateDisplay extends Component {
 
  render() {
   
    const {display} = this.props;

    return (
      <div>
          <div className="display">{display}</div>
      </div>
    )
  }
}

export default CalculateDisplay;

