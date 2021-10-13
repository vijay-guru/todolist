import React from 'react'
import {useSelector} from 'react-redux'
function Navbar() {
    const taskobj=useSelector(store=> store)
    return (
        <div className="navb">
            <h1>Redux TodoList - Number of tasks remained : {taskobj.taskitem.length}</h1>
        </div>
    )
}

export default Navbar
