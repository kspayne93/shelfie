import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';


class App extends Component {
  render() {
    return (
      <div className="App">
        < Header />
        < Dashboard />
        < Form />
      </div>
    );
  }
}

export default App;
