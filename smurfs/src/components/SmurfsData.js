import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SmurfsData = () => {
    const [smurfs, setSmurfs] = useState([]);
    const getData = () => {
        axios
            .get('http://localhost:3333/smurfs')
            .then(results => {
                // console.log('Results: ', results.data);
                setSmurfs(results.data);
            })
            .catch(error => console.log('Error: ', error));
    }

    useEffect(() => {
        getData();
    }, []);

    // console.log('Smurfs: ', smurfs)

    return (
        // using () instead of {} in the function below means
        // we can return something w/o a return keyword
        smurfs.map(smurf => (
            // console.log(smurf.name);
                <section key={smurf.id}>
                    <div>Name: {smurf.name}</div>
                    <div>Age: {smurf.age}</div>
                    <div>Height: {smurf.height}</div>
                </section>
        ))
    )
}

export default SmurfsData;