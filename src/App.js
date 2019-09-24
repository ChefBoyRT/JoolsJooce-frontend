import React, { Component } from 'react';
import './App.css';
import Container from './components/Container'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


class App extends Component  {
  state = {
    stores: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/stores')
      .then(response => response.json())
      .then(results => this.setState({stores: results}))
  }

  render(){
    console.log(this.state)
    return (
      <div>
        <NavBar />
        <h1>JooLS JooCE</h1>
        <Container stores={this.state.stores} />
        <Footer />
      </div>
    )
  }
}

export default App
