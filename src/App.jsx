import React from 'react'
import '/src/index.css'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
// import MainDash from './Components/MainDash'
import Form1 from './Components/Form1'
import Form2 from './Components/Form2'
import Form3 from './Components/Form3'
import Form4 from './Components/Form4'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "" element = {<Home/>}></Route>
      <Route path = "/dashboard" element = {<Dashboard/>}></Route>
      {/* <Route path = "/maindash" element = {<MainDash/>}></Route> */}
            <Route path="/form1" element={<Form1 />} />
            <Route path="/form2" element={<Form2 />} />
            <Route path="/form3" element={<Form3 />} />
            <Route path="/form4" element={<Form4 />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
