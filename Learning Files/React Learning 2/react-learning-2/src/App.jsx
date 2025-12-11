import { useState } from 'react'
import Card from './Card.jsx'
import Learning_Chapter from './Learning_Chapter.jsx'
import Button from './Button/Button.jsx'
import Button1 from './Button1.jsx'
import Student from './Student/Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import HookPractice from './HookPractice.jsx'
import Form from './Form.jsx'
import Car from './Car.jsx'
import Food from './Food.jsx'
import ListOfCar from './ListOfCar.jsx'
import Effect from './Effect.jsx'
import ComponentA from './ComponentA.jsx'
import ComponentB from './ComponentB.jsx'
import ComponentC from './ComponentC.jsx'
import ComponentD from './ComponentD.jsx'
import Useref from './Useref.jsx'


function App() {
  return (
    <>
    <Learning_Chapter chapter={1}/>
    <Card />
    <Card />
    <Learning_Chapter chapter={2}/>
    <Button isChapter2 = {true}/>
    <Button1 />
    <Learning_Chapter chapter={3}/>
    <Student name="Valentino" age={18} isStudent={true}/>
    <Student name="Student2" age={21} isStudent={true}/>
    <Student />
    <Learning_Chapter chapter={4}/>
    <UserGreeting isLoggedIn={true} username="Valentino"/>
    <Learning_Chapter chapter={5} />
    <List />
    <Learning_Chapter chapter={6}/>
    <Button isChapter2= {false}/>
    <ProfilePicture />
    <Learning_Chapter chapter={7} />
    <HookPractice />
    <Learning_Chapter chapter={8} />
    <Form />
    <Learning_Chapter chapter={9} />
    <Car />
    <Learning_Chapter chapter={10} />
    <Food />
    <Learning_Chapter chapter={11} />
    <ListOfCar />
    <Learning_Chapter chapter={12} />
    <Effect />
    <Learning_Chapter chapter={13} />
    <ComponentA />
    <Learning_Chapter chapter={14} />
    <Useref />
    </>
  );
}

export default App
