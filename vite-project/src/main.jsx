import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// const reactElement = {
//   type: 'a',
//   props: {
//       href:'https://www.google.com',
//       target:'_blank'
//   },
//   children: 'Click here to visit Google'
// }

const anotherElement = (
  <a href='https://www.google.com' rel='noreferrer' target='_blank'>Click here to visit Google</a>
)

const username = 'Seronic'

const reactElement = React.createElement(
  'a',
  {href:'https://www.google.com', target:'_blank'},
  'Click here to visit Google',
  username
)

ReactDOM.createRoot(document.getElementById('root')).render(
 // App() is also possible
   reactElement 
)
