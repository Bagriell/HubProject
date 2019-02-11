import React, { Component } from 'react';
import './App.css';
import { Footer } from './Components/Footer'
import { Container } from './Components/Container'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
