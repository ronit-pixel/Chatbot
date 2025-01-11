import React from 'react'
import './index.css'
import Sidebar from './Components/sidebar/Sidebar'
import HEro from './Components/hero/HEro'

const App = () => {
  return (
    <div id='root'>
      <Sidebar/>
      <HEro/>
    </div>
  )
}

export default App
