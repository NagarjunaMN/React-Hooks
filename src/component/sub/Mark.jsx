import React from 'react'

function Mark(props) {
  return (
    <div className='container'>
      <div className="row">
            <div className="col-md-12 text-center">
                <h5 className='display-3 text-primary'>marks = {props.marks} </h5>
                <button onClick={props.handler} className="btn btn-danger mt-2">Inc Marks</button>
            </div>
        </div>
    </div>
  )
}

export default Mark
