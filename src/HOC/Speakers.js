import React from 'react';
import {withData,withDataUsingCurrying} from './withData';



const Speakers = ({data,speakers}) => {
    return (
        <div>
            <h1>Using HOC Component</h1>
            {data}
            <h3>Speakers Data</h3>
            <ul>
            {speakers.map(({ id, name }) => {
                return <li key={id + 'hoc'}>{name}</li>
            })}
                </ul>
        </div>
    );
};


//export default withData(Speakers);
export default withDataUsingCurrying(2)(Speakers);