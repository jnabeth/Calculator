import React, { Component } from 'react';
import Keyboard from './keyboard';
import Display from '../containers/display';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Display />
        <Keyboard />
      </div>
    );
  }
}
