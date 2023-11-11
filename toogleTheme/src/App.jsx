import { useEffect, useState } from 'react'
import './App.css'

import Card from './components/Card/Card'
import ThemeBtn from './components/ThemeBtn/ThemeBtn'
import { ThemeProvider } from './context/Theme'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const darkTheme = () => {
    setThemeMode('dark')
  }

  const lightTheme = () => {
    setThemeMode('light') 
  }

  //actual change in theme

  useEffect (() => {
    const theme = document.querySelector('html')
    theme.classList.remove('light', 'dark')
    theme.classList.add(themeMode)
  }, [themeMode])

  return ( 
    <ThemeProvider value={{
      themeMode, darkTheme, lightTheme,
    }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn/>
            </div>
            <div className="w-full max-w-sm mx-auto">
                <Card/>
            </div>
        </div>
      </div>
    </ThemeProvider> 
  )
}

export default App
