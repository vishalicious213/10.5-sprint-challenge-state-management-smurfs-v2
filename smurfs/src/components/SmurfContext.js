import React from 'react';

export const SmurfProvider = () => {
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

    )
}