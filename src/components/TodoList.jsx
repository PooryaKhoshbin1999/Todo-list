import { useState } from "react";



const TodoList = ({todos , setTodos}) => {
    const [complete , setComplete] = useState("red");
    return ( 
        <div>
            {todos.map((todo) => (
                <li className="todoListItem"  key={todo.id} onChange={(event)=> event.preventDefault()}>
                    <div className={`${todo.completed ? "complete" :"list"}`}>
                    {todo.title}
                    </div>
                   <div className="listButton">
                     <div className="buttonComplet" style={{color:todo.color}} onClick={()=>{handleComplete(todo)}}>
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="buttonDelete" onClick={()=>{handleDelete(todo)}} >
                        <i className="fas fa-trash" ></i>
                    </div>
                   </div>
                </li>
            ))}
        </div>
     );
              function handleDelete ({id}){
                    setTodos(todos.filter((todo)=> todo.id !== id))
              } 
              function handleComplete(todo){
                    setTodos(
                        todos.map((item)=>{
                            if(item.id === todo.id){
                                return {...item,completed: !item.completed}
                                
                            }
                            return item;
                        })
                    )
              }
}
 
export default TodoList;