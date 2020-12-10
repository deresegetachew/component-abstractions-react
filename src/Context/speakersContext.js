import React from 'react';

const data = 'using Context'
const speakers = [{ id: 1, name: 'abc' }, { id: 2, name: 'def' }, { id: 3, name: 'hij' }];

const SpeakerContext = React.createContext({ speakers, data });


export default SpeakerContext;