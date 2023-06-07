import React, { useState } from 'react'

//react hooks => use only in functional components
//3 basic react hooks are
//1. useState
//2.useEffect
//3.useContext 

function Ex1() {
  //const [state,handler] = useState(initValue) //declare react state in functional component
  const [x,setX] = useState(10)
  const [title,setTitle] = useState("Welcome to react state")
  const [isView,setIsView] = useState(true)
  const [colors,setColors] = useState(['red','blue','green'])
  const [user,setUser] = useState({
    name:'Raju',
    email:'raju#gmail.com'
  })
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-success">useState</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-warning mt-2"> x = { x } </h3>
          <h3 className="text-warning mt-2"> title = { title } </h3>
          <h3 className="text-warning mt-2"> isView = { isView?"True":"False" } </h3>
          <h3 className="text-warning mt-2">{
            colors && colors.map((item,index) => {
              return <h3>{item}</h3>
            })
          }</h3>
          <h3 className="text-warning mt-2"> user name = { user.name } </h3>
          <h3 className="text-warning mt-2"> user email = { user.email } </h3>

        </div>
      </div>
    </div>
  )
}

export default Ex1
