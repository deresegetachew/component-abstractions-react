import React from 'react';

const Speakers = () => {
    const speakers = [{ id: 1, name: 'abc' }, { id: 2, name: 'def' }, { id: 3, name: 'hij' }];
    return (
        <>
                <h2>Original Speaks Component</h2>
                <ul>
                    {
                        speakers.map((s) => {
                            return <li key={s.id}>{s}</li>
                        })
                        }
                    </ul>
            </>
    );
};

export default Speakers;