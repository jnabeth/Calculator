import React from 'react';
import CalculatorKey from '../containers/calculator_key';

const Keyboard = () => {
  return (
    <div className="container" id="keyboard">
      <div className="row no-gutters">
        <div className="col-6"><CalculatorKey id="CE" text="CE" color='#6C648B'/></div>
        <div className="col"><CalculatorKey id="clear" text="AC" color='#6C648B' /></div>
        <div className="col"><CalculatorKey id="divide" text="÷" color='#FBA100' /></div>
      </div>
      <div className="row no-gutters">
        <div className="col"><CalculatorKey id="seven" text="7" color='#6BBAA7' /></div>
        <div className="col"><CalculatorKey id="eight" text="8" color='#6BBAA7' /></div>
        <div className="col"><CalculatorKey id="nine" text="9" color='#6BBAA7' /></div>
        <div className="col"><CalculatorKey id="multiply" text="×" color='#FBA100'/></div>
      </div>
      <div className="row no-gutters">
        <div className="col"><CalculatorKey id="four" text="4" color='#6BBAA7' /></div>
        <div className="col"><CalculatorKey id="five" text="5" color='#6BBAA7' /></div>
        <div className="col"><CalculatorKey id="six" text="6" color='#6BBAA7' /></div>
        <div className="col"><CalculatorKey id="subtract" text="-" color='#FBA100'/></div>
      </div>
      <div className="row no-gutters">
        <div className="col"><CalculatorKey id="one" text="1" color='#6BBAA7' /></div>
        <div className="col"><CalculatorKey id="two" text="2" color='#6BBAA7' /></div>
        <div className="col"><CalculatorKey id="three" text="3" color='#6BBAA7' /></div>
        <div className="col"><CalculatorKey id="add" text="+" color='#FBA100' /></div>
      </div>
      <div className="row no-gutters">
        <div className="col"><CalculatorKey id="zero" text="0" color='#6BBAA7' /></div>
        <div className="col"><CalculatorKey id="decimal" text="." color='#6BBAA7' /></div>
        <div className="col-6"><CalculatorKey id="equals" text="=" color='#6C648B' /></div>
      </div>
    </div>

  )
}

export default Keyboard;
