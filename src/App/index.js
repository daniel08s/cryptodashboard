// npm packages
import React, { Component } from 'react';
import styled, { css } from 'styled-components';

// project packages
import './App.css';
import Welcome from './WelcomeMessage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
      </div>
    );
  }
}

export default App;
