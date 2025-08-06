import Main from './components/Main'
import Header from './components/Header'
import './App.css'
import {createContext, useState} from 'react'

const ThemeContext = createContext()

export default function App() {
  const [theme, setTheme] = useState('light')
  function toggleTheme() {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div className={`container ${theme}-theme`}>
          <Header />
          <Main />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export { ThemeContext }
