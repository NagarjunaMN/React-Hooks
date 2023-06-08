import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import Menu from './component/Menu'
import Ex1 from './component/Ex1'
import Ex2 from './component/Ex2'
import Ex3 from './component/Ex3'
import Ex4 from './component/Ex4'
import Pnf from './component/Pnf'


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={< Ex1 />}></Route>
        <Route path='/ex1' element={< Ex1 />}></Route>
        <Route path='/ex2' element={< Ex2  itemsPerPage = {10}/>}></Route>
        <Route path='/ex3' element={< Ex3 itemsPerPage = {5} />}></Route>
        <Route path='/ex4' element={< Ex4 />}></Route>
        <Route path='/*' element={< Pnf />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
