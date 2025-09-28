import React, {useState} from 'react'
function ToDoList(){
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState("")
    
    const handleTaskChange  = (event)=>{
        setInput(event.target.value)
        
    }
    console.log(input)

    const handleAddTask = ()=>{
        if(input){
            setTasks(t => [...t, input])
            setInput("")
            console.log(input)
        }   
    }
    console.log(tasks)
    
    const handleDeleteChange = (index)=>{
        const newTasks = tasks.filter((_, i) => i !== index)
        setTasks(newTasks)
    
    
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
                tasks.map((task, index) => {return(
                    <div className="list-to-do" key={index}>
                        <p>{task}</p>
                        <div className="button-el">
                            <button className='button-del' onClick={()=>handleDeleteChange(index)}>Delete</button>
                            <button className='button-like'>👍🏾</button>
                            <button className="button-dislike">👎🏾</button>  
                        </div>
                    </div>
                )})
            }
            
        </div>
        </>
    )
    
            
            
                
          
            
                
      
    

}
export default ToDoList