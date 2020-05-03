// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import React from 'react';
import Smurf from './Smurf';

const SmurfsData = () => {
    // const [smurfs, setSmurfs] = useState([]);
    // const getData = () => {
    //     axios
    //         .get('http://localhost:3333/smurfs')
    //         .then(results => {
    //             // console.log('Results: ', results.data);
    //             setSmurfs(results.data);
    //         })
    //         .catch(error => console.log('Error: ', error));
    // }

    // useEffect(() => {
    //     getData();
    // }, []);

    // // console.log('Smurfs: ', smurfs)

    return (
        smurfs.map(smurf => (
            // console.log(smurf.name);
            <Smurf name={smurf.name} age={smurf.age} height={smurf.height} key={smurf.id} />
        ))
    )
}

export default SmurfsData;