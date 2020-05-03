import React, { useState, useContext } from 'react';
import { SmurfContext } from './SmurfContext';

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
        setSmurfs(prevSmurfs => [...prevSmurfs], { name: name, age: age, height: height})
    }

    return (
        <form onSubmit={submitSmurf}>
            <input type='text' name='name' placeholder='Name' value={name} onChange={updateName}/>
            <input type='text' name='age' placeholder='Age' value={age} onChange={updateAge}/>
            <input type='text' name='height' placeholder='Height' value={height} onChange={updateHeight}/>
            <button>Add Smurf</button>
        </form>
    )
}

export default AddSmurf;