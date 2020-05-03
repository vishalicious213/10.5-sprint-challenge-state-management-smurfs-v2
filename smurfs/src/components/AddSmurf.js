import React, { useState } from 'react';

const AddSmurf = () => {
    return (
        <form>
            <input type='text' name='name'/>
            <input type='text' name='age'/>
            <input type='text' name='height'/>
            <button>Add Smurf</button>
        </form>
    )
}