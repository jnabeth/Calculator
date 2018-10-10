import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component {
  render() {
    if(this.props.number == null) {
      var value = '0';
    } else {
      var value = this.props.number;
    }

    return (
      <div id="displayOverall">
        <div id="display-equation">{this.props.equationValue}</div>
        <div id="display"> {value} </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    number: state.keyboard.number,
    equationValue: state.keyboard.equationValue
  };
}

export default connect(mapStateToProps, null)(Display);
