import React, {useContext} from 'react';
import SpeakerContext from './speakersContext';

const Speakers = () => {
    const {data,speakers} = useContext(SpeakerContext); 

    return (
        <div>
            <>
                    <h1>Using Context</h1>
                    {data}
                    <h3>Speakers Data</h3>
                    <>
                        <h2>Original Speaks Component</h2>
                        <ul>
                            {speakers.map((s) => {
                                return <li key={s.id + 'render-props'}>{s.name}</li>;
                            })}
                        </ul>
                    </>
                </>)
      </div>
    );
};

export default Speakers;