import React, { Component } from 'react'

import './Button.css';

class NumberButton extends Component {

  
  render() {

    const {inputNumber, clearScreen} = this.props; 

    return (
      <div className="container--button" >

                <button className="btn clear" onClick={() => {clearScreen()}}>clear</button>

                <div className="row">
                    <button className="btn" onClick={() => {inputNumber(7)}}>7</button>
                    <button className="btn" onClick={() => {inputNumber(8)}}>8</button>
                    <button className="btn" onClick={() => {inputNumber(9)}}>9</button>
                </div>

                <div className="row">
                    <button className="btn" onClick={() => {inputNumber(4)}}>4</button>
                    <button className="btn" onClick={() => {inputNumber(5)}}>5</button>
                    <button className="btn" onClick={() => {inputNumber(6)}}>6</button>
                </div>

                <div className="row">
                    <button className="btn" onClick={() => {inputNumber(1)}}>1</button>
                    <button className="btn" onClick={() => {inputNumber(2)}}>2</button>
                    <button className="btn" onClick={() => {inputNumber(3)}}>3</button>
                </div>
                
                <button className="btn zero" onClick={() => {inputNumber(0)}}>0</button>
        
      </div>
    )
  }
}

export default NumberButton;
