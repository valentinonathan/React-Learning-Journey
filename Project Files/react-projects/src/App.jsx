import { useState } from 'react'
import './index.css'
import './App.css'
import ProjectCards from './ProjectCards/ProjectCards.jsx';

function App() {
  return (
    <>
    <h1>Valentino React Mini Projects</h1>
    <p>Mini projects that I built in React for learning purposes</p>
    <div className='container'>
      <ProjectCards 
        image="/IMG_4087.jpg" 
        projectTitle="Color Picker" 
        projectDescription="This is a counter app"
        routing="/color-picker" />
      <ProjectCards 
        image="/IMG_4087.jpg" 
        projectTitle="To-do List" 
        projectDescription="This is a counter app"
        routing="/to-do-list" />
      <ProjectCards 
        image="/IMG_4087.jpg" 
        projectTitle="Digital Clock" 
        projectDescription="This is a counter app"
        routing="digital-clock" />
      <ProjectCards 
        image="/IMG_4087.jpg" 
        projectTitle="Stopwatch" 
        projectDescription="This is a counter app"
        routing="stopwatch" />
    </div>
    </>
  );
}

export default App
