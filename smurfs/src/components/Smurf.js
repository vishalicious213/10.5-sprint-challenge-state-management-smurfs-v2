import React from 'react';

const Smurf = ({ name, age, height}) => {
    return (
        <section>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Height: {height}</div>
        </section>
    )
}

export default Smurf;