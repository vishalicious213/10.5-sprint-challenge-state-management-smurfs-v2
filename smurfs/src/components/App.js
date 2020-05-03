import React from 'react';
import './App.css';
import SmurfsData from './SmurfsData';
import { SmurfProvider } from './SmurfContext';
import AddSmurf from './AddSmurf';

const App = () => {
    return (
        <SmurfProvider>
            <div className="App">
                <h1>SMURFS! 2.0 W/ Redux</h1>
                <div>Welcome to your state management version of Smurfs!</div>
                <div>Start inside of your `src/index.js` file!</div>
                <div>Have fun!</div>
                <SmurfsData />
                <AddSmurf />
            </div>
        </SmurfProvider>
    );
}

export default App;