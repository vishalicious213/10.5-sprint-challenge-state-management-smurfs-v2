import React, { useState } from 'react';

const AddSmurf = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    const updateName = event => {
        setName(event.target.value);
    }

    const updateAge = event => {
        setAge(event.target.value);
    }

    const updateHeight = event => {
        setHeight(event.target.value);
    }

    return (
        <form>
            <input type='text' name='name' value={name} onChange={updateName}/>
            <input type='text' name='age' value={age} onChange={updateAge}/>
            <input type='text' name='height' value={height} onChange={updateHeight}/>
            <button>Add Smurf</button>
        </form>
    )
}