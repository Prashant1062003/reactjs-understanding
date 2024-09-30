
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import User from './components/User';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
      children: [
        {
          path: "/home",
          element: <Home/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "user/:username",
          element: <User/>
        }
      ]
    },
    
  ]);

  return (
    <>
    
        <RouterProvider router={router}/>
    </>
  )
}

export default App
