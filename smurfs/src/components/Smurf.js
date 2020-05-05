import React from 'react';

const Smurf = ({ name, age, height}) => {
    return (
        <section className='smurf'>
            <img className='smurf-image' src={require(`./${height}.png`)} alt='smurf'></img>
            <h3>{name}</h3>
            <div className='stats'>Age: {age}</div>
            <div className='stats'>Height: {height}</div>
        </section>
    )
}

export default Smurf;