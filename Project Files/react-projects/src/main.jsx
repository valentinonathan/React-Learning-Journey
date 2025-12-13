import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ColorPicker from './ColorPicker/ColorPicker.jsx'
import ToDoList from './ToDoList.jsx'
import DigitalClock from './DigitalClock.jsx'
import Stopwatch from './Stopwatch.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'



const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/color-picker", element: <ColorPicker />}, 
  {path: "/to-do-list", element: <ToDoList />}, 
  {path: "/digital-clock", element: <DigitalClock />},
  {path: "/stopwatch", element: <Stopwatch />},
  {path: "*", element: <App />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
