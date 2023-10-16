import React from 'react';
import './App.css';  // Import your CSS file here if you have one.
import AdityaInfo from './Components/Adityainfo';
import AboutMe from './Components/Aboutme';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <AdityaInfo />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
