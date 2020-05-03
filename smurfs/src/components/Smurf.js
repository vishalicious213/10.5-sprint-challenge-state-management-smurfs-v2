import React from 'react';

const Smurf = ({ name, age, height}) => {
    return (
        <section className='smurf'>
            <h3>{name}</h3>
            <div>Age: {age}</div>
            <div>Height: {height}</div>
        </section>
    )
}

export default Smurf;