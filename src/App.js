import comic from './xkcd247.png'
import './App.css';
import { Table } from 'reactstrap';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primes: {},
      value: 8
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    // needs validation here!
    // number should be > 1, less than... max int?
    event.preventDefault();
    console.log(this.state.value);
    let curl = 'https://helloacm.com/api/factor/?cached&n='.concat(this.state.value)
    axios.get(curl).then((response) => {
      this.setState({
        primes: response.data
      })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <label>
              Input:
              <input type="number" value={this.state.value} onChange={this.handleChange}></input>
            </label>
            <input type="submit" value="Prime Factorize Input!"/>
          </form>
          <br/><br/>
          <Table>
            <thead>
              <tr>
                <th>Prime Factorization</th>
              </tr>
            </thead>
            <tbody>
            <tr key = "display">
              <td>{this.state.primes.result}</td>
            </tr>
            </tbody>
          </Table>
          <br/>
          <br/>
          <br/>
          <img src={comic} alt="xkcd comic 247"/>
          xkcd comic 247: https://xkcd.com/247/
        </header>
      </div>
    );
  }
}

export default App;
