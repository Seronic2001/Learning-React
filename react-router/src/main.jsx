import React from 'react'

import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

import Layout from './Layout'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github, { githubInfoLoader } from './components/Github/Github'
import User from './components/User/User'

import './index.css'
import Home from './components/Home/Home'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout />,
//     children : [
//       {
//         path : '',
//         element : <Home />
//       },
//       {
//         path : 'about',
//         element : <About />
//       },
//       {
//         path : 'contact',
//         element : <Contact />
//       },
//       {
//         path : 'github',
//         element : <Github/>
//       },
//       {
//         path : 'user',
//         element : <User/>,
//         children : [
//           {
//           path : ':userid',
//           element : <User/>,
//          }
//         ]
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route loader={githubInfoLoader}
      path="github" element={<Github />} />
    <Route path="user" element={<User />}/>
    <Route path="user/:userid" element={<User />}/>
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
)
