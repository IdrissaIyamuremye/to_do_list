import React, {useState} from 'react'
function ToDoList(){
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState("")
    
    //
    const handleTaskChange  = (event)=>{
        setInput(event.target.value)
        
    }
    //
    const handleAddTask = ()=>{
        if(input){
            setTasks(t => [...t, input])
            setInput("")
        }   
    }
    //
    const handleDeleteChange = (index)=>{
        const newTasks = tasks.filter((_, i) => i !== index)
        setTasks(newTasks)
    }
  
    //
    const handleUpMove =(index)=>{
        setTasks(t => {
            let newTasks = [...t]
            
            if(index <= 0) return t;
        
            [newTasks[index], newTasks[index-1]] = [newTasks[index - 1], newTasks[index]]
            console.log(`index:${index} Button clicked ${newTasks[index]}`)
            return newTasks
        })
             
    }
    
    const handleDownMove= (index) =>{
        setTasks(t =>{
            let newTasks = [...t]
            if(index <= 0) return t
            [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]]
            return newTasks
        })
    }
    return(
        <>
        <div>
            <h1>Task-to-DO</h1>
            <div className="input-container">
                <input type="text" id="input-el"placeholder='Enter task....' value={input} onChange={handleTaskChange} />
                <button onClick={handleAddTask}>Add</button>
            </div>
            {
               tasks.map((task, index) => {
                return(
                    <div className="list-to-do" key={index}>
                        <p>{index+1}.{task}</p>
                        <div className="button-el">
                            <button className='button-del' onClick={()=>handleDeleteChange(index)}>Delete</button>
                            <button className='button-like'onClick={()=>handleUpMove(index)}>
                                <i className="fa fa-arrow-up" ></i>

                            </button>
                            <button className="button-dislike" onClick={() => handleDownMove(index)}>
                                <i className="fa fa-arrow-down"></i>
                            </button>  
                        </div>
                    </div>
                )}) 
            }
        </div>
        </>
    )

}
    
export default ToDoList