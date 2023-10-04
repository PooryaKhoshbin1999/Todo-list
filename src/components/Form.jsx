let id = 0;

const Form = ({input , setInput , todos , setTodos}) => {
   
function createId(){
    id++;
    return id;
}


    const onInputChang = (event) =>{
        setInput(event.target.value);
    }
    const onFormSubmit = (event) =>{
        event.preventDefault();
        setTodos([...todos ,{ id:createId() , title:input , completed:false}]);
        setInput("");
    }
    return ( 
        <form onSubmit={onFormSubmit} className="form">
            <input 
            type="text" 
            placeholder="Enter a todo ...."
            className="taskInput" 
            value={input}
            required
            onChange={onInputChang}
            />
            <button className="fas fa-plus" type="submit"></button>
        </form>
     );

    
}
 
export default Form;