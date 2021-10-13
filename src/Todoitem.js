import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
function Todoitem({task}) {
    const[show,setshow]=useState('none')
    const[newtask,setnewtask]=useState('')
    const dispatch=useDispatch()
    function deletetask(){
        dispatch({type:'DELETE_ITEM',payload:task})
    }
    function edittask(){
        setshow('inline')
    }
    function doneedit(){
        
        dispatch({type:'EDIT_ITEM',payload:{oldtask:task,newtask:newtask}})
        setshow('none')
    
    }
    return (
        <div>
        <div className="row  ">
            <h3 className="col-md-4" style={{marginTop:"20px"}}>{task}</h3> 
            <button onClick={edittask} style={{marginTop:"20px"}} className="btn btn-warning col-md-3 ">Edit</button>     
            <button onClick={()=>deletetask(task)} style={{marginTop:"20px"}} className="btn btn-success col-md-3">Delete</button>
        </div>
        <div style={{display:show}}>
        <input type="text" value={newtask} placeholder="Enter a new task" onChange={(e)=>{setnewtask(e.target.value)}} />
        <button onClick={doneedit} style={{marginTop:"20px"}} className="btn btn-warning">Done</button>
        </div>
        
        </div>
    )
}

export default Todoitem
