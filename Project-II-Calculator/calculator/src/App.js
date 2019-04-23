import React, { Component } from 'react'
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculateDisplay from './components/DisplayComponents/CalculatorDisplay';

import './App.scss';

class App extends Component {

  state = {
    displayScreen: '0',
    holdingForActionButton: false,
    actionBtn: null
  }

  inputNumber = (num) =>{
    const {displayScreen} = this.state;

    this.setState({
      // if the display screen is 0, insert the next number as a string, else display the screen with next number
      displayScreen: displayScreen === '0' ? String(num) : displayScreen + num
    })
  }

  clearScreen = () => {
     this.setState({
       displayScreen: '0'
     })
  }

 calculationProcess = (actionBtn) => {
    // we are wating for an action button (-, +, x, /), so we'll keep that in holdingForActionButton
    // actionBtn has to be stored too b/c after we put in another number, we'll use the = actionBtn
    this.setState({
      holdingForActionButton: true,
      actionBtn: actionBtn,

    })
 }




  render () {

  return (
    <div className="App" style={{margin: "50px auto", width: "500px"}}>
        <CalculateDisplay display={this.state.displayScreen}/>
     <div style={{display: "flex"}}>
        <NumberButton inputNumber={this.inputNumber}  clearScreen={this.clearScreen}/>
        <ActionButton calculationProcess={this.calculationProcess}/>
      </div>
    </div>
  );
  }
}

export default App;