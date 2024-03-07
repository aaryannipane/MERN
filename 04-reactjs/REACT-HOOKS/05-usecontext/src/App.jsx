import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Theme } from './context/themeContext'
import { DeepComponent } from './DeepComponent'

function App() {

  return (
    <>
    <Theme>
      <h1>context</h1>
      <DeepComponent/>
    </Theme>
    </>
  )
}

export default App
