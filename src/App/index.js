// npm packages
import React, { Component } from 'react';
import styled, { css } from 'styled-components';

// project packages
import './App.css';
import Welcome from './WelcomeMessage';
import AppLayout from './AppLayout';
import AppBar from './AppBar';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppBar />
        <Welcome />
      </AppLayout>
    );
  }
}

export default App;
