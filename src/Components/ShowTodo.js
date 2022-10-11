import React from 'react'

function ShowTodo(props) {
    return (
        <div className='container '>
            <div className="row">

                <div className="col-6">
                    <h6>{props.task}</h6>
                </div>
                <div className="col-6">
                <button className={`btn ${props.BgColor} my-1`} onClick={()=>{
                    props.onSelcet(props.id,props.task)
                }}>{props.Status}</button>
                </div>
            </div>
            
        </div>
    )
}

export default ShowTodo;