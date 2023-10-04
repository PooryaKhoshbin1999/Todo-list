import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";
import '../src/components/app.css'



const App = () => {
  const [input , setInput] = useState("");
  const [todos , setTodos] = useState([]);
  return (
    <div className="container">
      <div className="appWrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          />
        </div>
        <div>
          <TodoList 
          todos={todos}
          setTodos={setTodos}
          />
        </div>
      </div>
    </div>
    );
    
}
 
export default App;