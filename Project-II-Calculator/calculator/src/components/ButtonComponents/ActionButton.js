
import React, { Component } from 'react'
import './Button.css';


class ActionButton extends Component {
  render() {
    const {calculationProcess} = this.props; 
    return (
      <div className="action--container">
          <div className="column">
                <button className="action-btn" onClick={() => {calculationProcess('/')}}>&#247;</button>
                <button className="action-btn" onClick={() => {calculationProcess('*')}}>&#215;</button>
                <button className="action-btn" onClick={() => {calculationProcess('-')}}>&#45;</button>
                <button className="action-btn" onClick={() => {calculationProcess('+')}}>&#43;</button>
                <button className="action-btn" onClick={() => {calculationProcess('=')}}>&#61;</button>
          </div>
      </div>
    )
  }
}

export default ActionButton;
