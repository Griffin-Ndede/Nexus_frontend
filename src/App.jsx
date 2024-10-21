import React from 'react'
import '/src/index.css'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "" element = {<Home/>}></Route>
      <Route path = "/dashboard" element = {<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
