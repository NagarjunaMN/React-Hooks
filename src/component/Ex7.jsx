import React, {useState, useLayoutEffect} from 'react'

const URL = "https://jsonplaceholder.typicode.com"

function Ex7(props) {
    const[users, setUsers] = useState([])

    const getUsers = async () => {
        await fetch(`${URL}/users`)
        .then(res => res.json())
        .then((res) => {
            console.log("response" ,res)
            setUsers(res)
        }).catch(err => console.log(err.message))
    }
    useLayoutEffect(() => {
        getUsers()
    },[])
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display3 text-success">useLayoutEffect</h3>
        </div>
      </div>
      <div className="row">
        {
            users && users.map((item,index) => {
                return(
                    <div className="col-md-3 mt-2 mb-2" key={index}>
                        <div className="card">
                            <div className="card-header">
                                <h5 className="text-center text-success"> {item.name} </h5>
                            </div>
                            <div className="card-body">
                                <h6 className="text-center text-success">Email - {item.email} </h6>
                                <h6 className="text-center text-success">Phone - {item.phone} </h6>
                                <h6 className="text-center text-success">Website - {item.website} </h6>
                            </div>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Ex7
