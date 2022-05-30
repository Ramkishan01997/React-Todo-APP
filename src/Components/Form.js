import React,{useState,useEffect} from 'react'
import{v4 as uuidv4} from "uuid";
import axios from 'axios';
const Form=({input,inputRef,setInput,todos,setTodos,editTodo,setEditTodo,setId
,id,toggleSubmit,setToggleSubmit})=> {
   
    const onInputChange=(event)=>{
        setInput(event.target.value)
    }
   
    const handleSubmit=(event)=>{
        event.preventDefault();
        
            setTodos([...todos,{id:uuidv4(),title:input,completed:false}]);
            setInput("");
       inputRef.current.focus()
         
    }
   
    const chart=()=>{
        let empSal=[];
        let empAge=[];
        axios
        .get("http://dummy.restapiexample.com/api/v1/employees")
        .then(res=>{
            console.log(res);
            for(const dataObj of res.data.data){
                empSal.push(parseInt(dataObj.employee_salary));
                empAge.push(parseInt(dataObj.employee_age));
                console.log(empSal,empAge);
            }
        })
        .catch(err=>{
            console.log(err)
        })
        // console.log(empSal,empAge);
    }
    useEffect(()=>{
        // inputRef.current.focus()
        chart();
    },[])

    return (
       <form onSubmit={handleSubmit}>
       <input type="text" ref={inputRef} placeholder="Enter a todo..." className="task-input"
       required="required" value={input}
       onChange={onInputChange}/>
     {toggleSubmit? <button type="submit" className="button-add">Add</button>:
     <button type="submit" className="button-add">Edit</button>} 
       </form>
    )
}

export default Form
