import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AddRemoveCards from './pages/AddRemoveCards/AddRemoveCards.jsx'
import ToDoList from './pages/ToDoList/ToDoList.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/add-remove-cards", element: <AddRemoveCards />}, 
  {path: "/to-do-list", element: <ToDoList />}, 
  {path: "modal-dialog", element: <App />}, 
  {path: "/fetch-display-data", element: <App />},
  {path: "/form-validation", element: <App />},
  {path: "theme-toggle", element: <App />},
  {path: "search-with-debounce", element: <App />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
