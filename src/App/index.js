// npm packages
import React, { Component } from 'react';
import styled, { css } from 'styled-components';

// project packages
import './App.css';
import Welcome from './WelcomeMessage';
import AppLayout from './AppLayout';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Welcome />
      </AppLayout>
    );
  }
}

export default App;
