import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import Menu from './component/Menu'
import Ex1 from './component/Ex1'
import Ex2 from './component/Ex2'
import Ex3 from './component/Ex3'
import Ex4 from './component/Ex4'


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/ex1' element={< Ex1 />}></Route>
        <Route path='/ex2' element={< Ex2 />}></Route>
        <Route path='/ex3' element={< Ex3 />}></Route>
        <Route path='/ex4' element={< Ex4 />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
