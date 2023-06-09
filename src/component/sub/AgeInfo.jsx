import React from 'react'

function AgeInfo(props) {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h5 className='display-3 text-warning mt-2'>{props.ageInfo()} </h5>
            </div>
        </div>
    </div>
  )
}

export default AgeInfo
