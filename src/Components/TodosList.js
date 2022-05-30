import React from 'react'

const TodosList = ({todos,setTodos,setEditTodo,setId
,setToggleSubmit,setInput}) => {
    const handleDelete=({id})=>{
        setTodos(todos.filter((todo)=>todo.id!==id))
    }
   
    const handleComplete=(todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id===todo.id){
                    return{...item,completed:!item.completed};
                }
                return item;
            })
        )
    }

    
    return (
        <div>
             {todos.map((todo)=>(
               <li className="list-item" key={todo.id}>
               <input type="text" value={todo.title}
               className={`list ${todo.completed ? "complete" : ""} `}
               onChange={(event)=>event.preventDefault()}/>
               <div>
               <button className="button-complete task-button"
               onClick={()=>handleComplete(todo)}>
               <i className="fa fa-check-circle"></i></button>
               
              
               <button className="button-delete task-button"
               onClick={()=>handleDelete(todo)}>
               <i className="fa fa-trash"></i></button>
               </div></li>
           ))}
        </div>
    )
}

export default TodosList


