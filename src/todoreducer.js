const initialstate={
    taskitem:[]
}
function todoreducer(state=initialstate,action){
        switch(action.type){
            case 'ADD_ITEM': return{
                ...state,
                taskitem:[...state.taskitem,action.payload]
            }
            case 'DELETE_ITEM': return{
                ...state,
                taskitem:state.taskitem.filter((task)=>task!==action.payload)
            }
            case 'EDIT_ITEM': return{
                ...state,
                taskitem:state.taskitem.map((task)=>{
                    if(task===action.payload.oldtask){
                        task=action.payload.newtask
                    }
                    return task
                })
            }
        }
        return state;
}
export default todoreducer;