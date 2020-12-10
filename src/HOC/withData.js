//note it is sending back a function

export const withData = (Component) => {
    const data = " High Order Component is a JS function that takes in a Component and returns a component."
    const speakers = [{ id: 1, name: 'abc' }, { id: 2, name: 'def' }, { id: 3, name: 'hij' }];
    return () => <Component data={data} speakers={speakers}></Component>
}




export const withDataUsingCurrying = (maxSpeakersToShow) => (Component) => {
      const data = " High Order Component is a JS function that takes in a Component and returns a component."
    const speakers = [{ id: 1, name: 'abc' }, { id: 2, name: 'def' }, { id: 3, name: 'hij' }];
    return () => {
        const limitSpeakers = speakers.slice(0, maxSpeakersToShow);
        return <Component data={data} speakers={limitSpeakers}></Component>
    }
}

