import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import SignIn from './components/SignIn/SignIn'
import Profile from './components/Profile/Profile'

function App() {
  const [user, setUser] = useState(null)
  return (
    <UserContextProvider value={{user , setUser}}>
      <div className='text-3xl'>Usage of UseContext hook</div>
      <SignIn />
      <Profile />
    </UserContextProvider>
  )
}

export default App
