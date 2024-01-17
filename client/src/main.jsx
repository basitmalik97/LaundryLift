import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Services from './pages/Services.jsx';
import NotFound from './pages/NotFound.jsx';
import Contact from './pages/Contact.jsx';
import Signup from './pages/Signup.jsx';
import Cart from './pages/Cart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },{
        path: '/home',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      }, {
        path: '/about',
        element: <About />
      }, {
        path: '/services',
        element: <Services />
      }, {
        path: '/contact',
        element: <Contact />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
