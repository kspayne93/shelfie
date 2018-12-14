import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';


class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: []
    }
  }

  componentDidMount() {
    axios.get(`/api/inventory`)
       .then(res => {
          this.setState({ inventory: res.data })
       })
 }

  render() {
    return (
      <div className="App">
        < Header />
        < Dashboard
            inventory={this.state.inventory} />
        < Form />
      </div>
    );
  }
}

export default App;
