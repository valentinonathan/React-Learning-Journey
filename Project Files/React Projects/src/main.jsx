import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AddRemoveCards from './pages/AddRemoveCards/AddRemoveCards.jsx'
import ToDoList from './pages/ToDoList/ToDoList.jsx'
import ToDoListImproved from './pages/ToDoListImproved/ToDoListImproved.jsx'
import PikachuAPI from './pages/pikachuAPI/pikachuAPI.jsx'
import LoginForm from './pages/LoginForm/LoginForm.jsx'
import CreateAccount from './pages/LoginForm/CreateAccount.jsx'
import LoginFormTailwind from './pages/LoginFormTailwind/LoginFormTailwind.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/add-remove-cards", element: <AddRemoveCards />}, 
  {path: "/to-do-list", element: <ToDoList />}, 
  {path: "/to-do-list-improved", element: <ToDoListImproved />},
  {path: "/pikachu-api", element: <PikachuAPI />},
  {path:"/login-form", element: <LoginForm />},
  {path: "/login-form/create-account", element: <CreateAccount />},
  {path: "/login-form-tailwind", element: <LoginFormTailwind />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
