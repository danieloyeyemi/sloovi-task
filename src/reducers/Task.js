const initState ={
    tasks :[]
 }
 const user = (state=initState,action)=>{
    if(action.type === 'DELETE_TASK'){
        let newTasks = state.tasks.filter(task =>{
            return action.id !== task.id;
        })
        return {
            ...state, 
           tasks : newTasks
        };
    }
 }
 export default user;
 