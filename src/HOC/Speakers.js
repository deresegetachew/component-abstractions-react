import React from 'react';
import {withData,withDataUsingCurrying} from './withData';



const Speakers = ({data,speakers}) => {
    return (
        <div>
            {data}
            <h1>Speakers Data</h1>
            <ul>
            {speakers.map(({ id, name }) => {
                return <li>{name}</li>
            })}
                </ul>
        </div>
    );
};


//export default withData(Speakers);
export default withDataUsingCurrying(2)(Speakers);