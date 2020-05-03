import React, { useState, useContext } from 'react';
import { SmurfContext } from './SmurfContext';
import axios from 'axios';

const AddSmurf = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    // useContext to pull in state (smurfs) to update array (setSmurfs)
    const [smurfs, setSmurfs] = useContext(SmurfContext);

    const updateName = event => {
        setName(event.target.value);
    }

    const updateAge = event => {
        setAge(event.target.value);
    }

    const updateHeight = event => {
        setHeight(event.target.value);
    }

    const submitSmurf = event => {
        event.preventDefault();
        setSmurfs(prevSmurfs => [...prevSmurfs, { name: name, age: age, height: height, id: Date.now()}]);
        //my first POST request. refreshed screen and the data persisted! same when file saved in VS Studio!
        axios
            .post('http://localhost:3333/smurfs', { name, age, height})
            .catch(error => console.log('POST Error: ', error));
        console.log(smurfs)
    }

    return (
        <form onSubmit={submitSmurf}>
            <input type='text' name='name' placeholder='Name' value={name} onChange={updateName}/>
            <input type='text' name='age' placeholder='Age' value={age} onChange={updateAge}/>
            <input type='text' name='height' placeholder='Height' value={height} onChange={updateHeight}/>
            <div>
                <button>Add Smurf</button>
            </div>
        </form>
    )
}

export default AddSmurf;