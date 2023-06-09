import React from 'react'

function Age(props) {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12">
                <h5 className='display-3 text-danger'>Age = {props.age} </h5>
                <button onClick={props.increaseAge} className="btn btn-primary mt-2">Inc Age</button>
            </div>
        </div>
    </div>
  )
}

export default Age
