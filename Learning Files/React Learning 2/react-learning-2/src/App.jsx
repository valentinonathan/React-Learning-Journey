import { useState } from 'react'
import Card from './Card.jsx'
import Learning_Chapter from './Learning_Chapter.jsx'
import Button from './Button/Button.jsx'
import Button1 from './Button1.jsx'
import Student from './Student.jsx'

function App() {
  return (
    <>
    <Learning_Chapter chapter={1}/>
    <Card />
    <Card />
    <Learning_Chapter chapter={2}/>
    <Button />
    <Button1 />
    <Learning_Chapter chapter={3}/>
    <Student name="Valentino" age={18} isStudent={true}/>
    </>
  );
}

export default App
