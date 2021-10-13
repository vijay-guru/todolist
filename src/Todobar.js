import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'
function Todobar() {
    const taskobj=useSelector(store=> store)
    const[task,settask]=useState('')
    const dispatch=useDispatch()
    function check(task){
        let flag=0;
       taskobj.taskitem.map((obj)=>{
           console.log(obj)
              if(task===obj)
              flag=1;
       })
       if(flag===1){
           return true;
       }
       return false;
    }
    function addtask(task){
        
        if(task===""){
            alert("Enter any task")
        }
        else if(check(task)){
            alert("Task already exists")
        }
        else{ 
        dispatch({type:'ADD_ITEM',payload:task})
        }
    }

    return (
        <div className="navb">
            <h1>Add a task</h1>
            <div className="row justify-content-center">
            <input type="text" autoFocus placeholder="Enter a task"  style={{display:"inline",width:"75"}} value={task} onChange={(e)=>{settask(e.target.value)}} className="col-md-6"  />
            <button onClick={()=>addtask(task)} className="btn btn-success col-md-1">Add</button>
            </div>
        </div>
    )
}

export default Todobar
