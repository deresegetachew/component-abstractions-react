
const SpeakersRenderProps = (props) => {
   const data = `A component with render props takes a function that returns a React element 
    and calls it instead of implementing its own render logic`;

    const speakers = [{ id: 1, name: 'abc' }, { id: 2, name: 'def' }, { id: 3, name: 'hij' }];

    return props.children({data,speakers});
}

export default SpeakersRenderProps;