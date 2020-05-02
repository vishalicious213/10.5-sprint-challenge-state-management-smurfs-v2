import React, { Component } from "react";
import "./App.css";
import axios from 'axios';

class App extends Component {
  getData = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(results => {
        console.log('Results: ', results.data)
      })
      .catch(error => console.log('Error: ', error));
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

export default App;



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>SMURFS! 2.0 W/ Redux</h1>
//         <div>Welcome to your state management version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div>
//       </div>
//     );
//   }
// }