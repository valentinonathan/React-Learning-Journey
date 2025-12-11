import { useState } from 'react'
import './index.css'
import './App.css'
import ProjectCards from './ProjectCards/ProjectCards.jsx';

function App() {
  return (
    <>
    <h1>Valentino React Mini Projects</h1>
    <p>Mini projects that I built in React for learning purposes</p>
    <ProjectCards 
      image="./assets/react.svg" 
      projectTitle="Counter" 
      projectDescription="This is a counter app" />
      <ProjectCards 
      image="./assets/react.svg" 
      projectTitle="Counter" 
      projectDescription="This is a counter app" />
      <ProjectCards 
      image="./assets/react.svg" 
      projectTitle="Counter" 
      projectDescription="This is a counter app" />
    </>
  );
}

export default App
