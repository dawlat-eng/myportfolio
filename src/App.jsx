//libraries
import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//styles
import './App.css';
//components
import Layout from './Components/Layout/Layout';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Intro from './Components/Intro/Intro';


function App() {
  const [count, setCount] = useState(0)
  // routes
const routes = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />,
    children: [
      {index:true , element:<Home/>},
      {path:'projects' , element:<Projects/>},
      {path:'about' , element:<About/>},
      {path:'skills' , element:<Skills/>},
      {path:'contact' , element:<Contact/>}, 
    ]},
]);

  return (
    <>
      {/* app */}
    <RouterProvider router={routes} />

    </>
  )
}

export default App;

