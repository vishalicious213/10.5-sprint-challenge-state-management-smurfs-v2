import React, { useContext } from 'react';
import { SmurfContext } from './SmurfContext';
import axios from 'axios';

const DeleteSmurf = (id) => {
    // useContext to pull in state (smurfs) to update array (setSmurfs)
    const [smurfs, setSmurfs] = useContext(SmurfContext);

    const deleteSmurf = event => {
        event.preventDefault();
        console.log('Delete ID: ', id);
        axios
            .delete(`http://localhost:3333/smurfs/${id}`)
            .then(results => {
                console.log('Delete Results: ', results.data);
                setSmurfs(results.data);
            })
            .catch(error => console.log('DELETE Error: ', error));
    }

    return (
        <form onSubmit={deleteSmurf}>
            <div className='delete-button-container'>
                <button className='delete-button' title='Delete Smurf'></button>
            </div>
        </form>
    )
}

export default DeleteSmurf;