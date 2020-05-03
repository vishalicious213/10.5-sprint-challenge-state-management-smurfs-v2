import React, { useContext } from 'react';
import Smurf from './Smurf';
import { SmurfContext } from './SmurfContext';

const SmurfsData = () => {
    const [smurfs, setSmurfs] = useContext(SmurfContext);

    return (
        smurfs.map(smurf => (
            // console.log(smurf.name);
            <div className='smurfbox' key={smurf.id}>
                <Smurf name={smurf.name} age={smurf.age} height={smurf.height} />
            </div>
        ))
    )
}

export default SmurfsData;