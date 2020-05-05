import React from 'react';
import './App.css';
import ShowSmurfs from './ShowSmurfs';
import { SmurfProvider } from './SmurfContext';
import AddSmurf from './AddSmurf';

const App = () => {
    return (
        <SmurfProvider>
            <div className="App">
                <h1>Welcome to the Smurf Village!</h1>
                <div className='intro'>One smurf does not a village make. Add some smurfs to help populate our village!</div>
                <AddSmurf />
                <div className='village'>
                    <ShowSmurfs />
                </div>
            </div>
        </SmurfProvider>
    );
}

export default App;