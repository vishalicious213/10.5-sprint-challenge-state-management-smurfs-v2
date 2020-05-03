import React from 'react';

const Smurf = ({ name, age, height}) => {
    return (
        <section className='smurf'>
            <img className='smurf-image' src={require(`./smurf.png`)} alt='smurf'></img>
            <h3>{name}</h3>
            <div>Age: {age}</div>
            <div>Height: {height}</div>
        </section>
    )
}

export default Smurf;