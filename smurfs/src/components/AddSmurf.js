import React, { useState, useContext } from 'react';
import { SmurfContext } from './SmurfContext';
import axios from 'axios';

const AddSmurf = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('100');          // age & height needed initial values when I made them
    const [height, setHeight] = useState('4cm');    // select (drop-downs) instead of inputs

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
        console.log(smurfs);
        console.log('Name: ', name);
        console.log('Age: ', age);
        console.log('Height: ', height);
    }

    return (
        <form onSubmit={submitSmurf}>
            <input type='text' name='name' placeholder='Name' value={name} onChange={updateName}/>

            <div className='age-height'>
                <span>Age: </span>
                <select className='drop-down' name='age' value={age} onChange={updateAge}>
                    <option value="100">100</option>
                    <option value="150">150</option>
                    <option value="200">200</option>
                    <option value="250">250</option>
                </select>
            </div>
            {/* <input type='text' name='age' placeholder='Age' value={age} onChange={updateAge}/> */}

            <div className='age-height'>
                <span>Height: </span>
                <select className='drop-down' name='height' value={height} onChange={updateHeight}>
                    <option value="4cm">4cm</option>
                    <option value="4.5cm">4.5cm</option>
                    <option value="5cm">5cm</option>
                    <option value="5.5cm">5.5cm</option>
                </select>
            </div>
            {/* <input type='text' name='height' placeholder='Height' value={height} onChange={updateHeight}/> */}
            <div>
                <button>Add Smurf</button>
            </div>
        </form>
    )
}

export default AddSmurf;