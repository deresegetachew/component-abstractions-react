import logo from './logo.svg';
import './App.css';
import EnhancedSpeakerComponent from './HOC/Speakers';
import RenderPropsSpeaker from './RenderProps/Speakers';
import ContextSpeakers from './Context/Speakers';

function App() {
  return (
    <div className="App">
      <EnhancedSpeakerComponent />
      <hr />
      <RenderPropsSpeaker />
      <hr />
      <ContextSpeakers />

    </div>
  );
}

export default App;
