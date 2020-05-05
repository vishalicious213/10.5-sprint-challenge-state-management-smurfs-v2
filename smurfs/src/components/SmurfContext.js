import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

// context (shares provider data to components)
export const SmurfContext = createContext();

// provider (holds the data for context to share)
export const SmurfProvider = (props) => {
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

    // initial axios call. runs once (dependency array)
    useEffect(() => {
        getData();
    }, []);

    // console.log('Smurfs: ', smurfs)

    return (
        <SmurfContext.Provider value={[smurfs, setSmurfs]}>
            {props.children}
        </SmurfContext.Provider>
    )
}