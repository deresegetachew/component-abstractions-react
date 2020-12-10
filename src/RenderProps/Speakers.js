import React from 'react';
import SpeakersRenderProps from './SpeakerRenderProps';


const Speakers = () => {
    return (
        <SpeakersRenderProps>
            {
                ({ speakers, data }) => {
                    return (
                        <>
                            <h1>Using Render Props Component</h1>
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
                        </>
                    )
                }
            }
        </SpeakersRenderProps>
    );
};

export default Speakers;