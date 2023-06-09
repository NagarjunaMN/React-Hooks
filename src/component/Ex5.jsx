import React, { useState, useMemo } from 'react'
import Mark from './sub/Mark'
import MarkInfo from './sub/MarkInfo'

function Ex5() {

    const [marks,setMarks] = useState(0)

    const incMarks = () => {
        setMarks(marks+1)
    }

    const updateMarks = useMemo(() => ({
        result:`Raju has scored ${marks} in Maths`
    }),[marks])

  return (
    <div className='container'>
      <div className="row">
            <div className="col-md-12 text-center">
                <h5 className='display-3 text-warning mt-2'>UseMemo() </h5>
            </div>
        </div>
        <Mark marks={marks} handler={incMarks} />
        <MarkInfo info = {updateMarks} />
    </div>
  )
}

export default Ex5
