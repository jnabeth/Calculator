import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayKey } from '../actions/index';

class CalculatorKey extends Component {
  onClick() {
    this.props.displayKey(this.props.text);
  }

  render () {
    return (
      <button
        id={this.props.id}
        type="button"
        className="calcKey"
        onClick={this.onClick.bind(this)}
        style = {{backgroundColor: this.props.color}}
      >
      {this.props.text}
      </button>
    );
  }
}

export default connect(null, { displayKey })(CalculatorKey);
