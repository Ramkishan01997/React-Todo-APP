import React,{useState,useEffect,useRef} from 'react';
import Header from './Components/Header';
import './App.css';
import Form from './Components/Form';
import TodosList from './Components/TodosList';

const App=()=> {
  const inputRef=useRef(null);
  const initialState=JSON.parse(localStorage.getItem("todos")) || [];

  const[input,setInput]=useState("")
  const[todos,setTodos]=useState(initialState)
  const[editTodo,setEditTodo]=useState(false)
  const[id,setId]=useState(null)
  const[toggleSubmit,setToggleSubmit]=useState(true);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

//
const{t,i18n}=useTranslation();

function handleClick(lang){
i18n.changeLanguage('en-US');
}


  return (
    <div className="container">
    <button onClick={()=>handleClick('en')}>english</button>
    <button onClick={()=>handleClick('kn')}>kn</button>
    <button onClick={()=>handleClick('chi')}>chinese</button>
      <div className="app-wrapper">
           <div>
             <Header/>
           </div>
           <div>
           <Form 
           inputRef={inputRef}
           input={input}
           setInput={setInput}
           todos={todos}
           setId={setId}
           setTodos={setTodos}
           editTodo={editTodo}
           setEditTodo={setEditTodo}
           toggleSubmit={toggleSubmit}
           setToggleSubmit={setToggleSubmit}/>
           </div>
           <div>
           {
             todos.length<=0? <div className="empty">No todo item</div>:
             <TodosList todos={todos}
           setTodos={setTodos}
           setId={setId}
            setEditTodo={setEditTodo}
           setToggleSubmit={setToggleSubmit}/>
          
           }
            </div>
      </div>
     
    </div>
  );
}

export default App;
