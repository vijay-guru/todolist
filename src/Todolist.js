import React from 'react'
import {useSelector} from 'react-redux'
import Todoitem from './Todoitem'
function Todolist() {
    const taskobj=useSelector(store=> store)
    const taskitems=taskobj.taskitem.map((task)=>{
          return <div>
                <Todoitem task={task} />
                </div>
    })
    return (
        
        <div className="todobar">
            <h1>Tasks</h1>
            <hr/>
            <div>
            {taskitems}
            </div>
        </div>
    )
}

export default Todolist
