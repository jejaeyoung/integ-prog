//MIDTERM_MERN_INF211_QUILATAN_DANIELSEBASTIAN_00122Afgh
import React from 'react'
import { useState } from "react";

function ScheduleForm() {
    // Create States
        //name
        const [theTask, setTask]=useState(""); 
        //level
        const [theLevel, setLevel]=useState(1);
        //subtasks
        const [theSubtask, setSubtask]=useState({});
        const [theSubtasks, setSubtasks]=useState([]);
        //description
        const [theDescription, setDescription]=useState("");
        //duration
        const [theDuration, setDuration]=useState(0);
     
        //remarks
        const [theRemarks, setRemarks]=useState("");

        //for an array state (Listahan ng Array)
        const [theTasks, setTasks]=useState([]);

            
        //createFriend event Listener
        const createTask = (e) => {

            // (theLevel >= 1 && theLevel <= 10) || theDescription.length <= 3 || theDuration >= 60
            if( theTask.length < 5 ||
                theLevel < 1 || theLevel > 10 ||
                theDescription.length < 3 ||
                theDuration < 1 )
            {
                alert("Please fill in all required field correctly.")
            }
            else
            {
                const newTask ={
                    theTask,
                    theLevel,
                    theDescription,
                    theRemarks,
                    theDuration,
                };
                //to stop auto refresh
                e.preventDefault();
                //to accumulate
                setTasks([...theTasks, newTask])

                if(theLevel < 3)
                {
                    setRemarks("Not Important");
                }
                else if (theLevel >= 4 && theLevel <= 7)
                {
                    setRemarks("Standard");
                }
                else
                {
                    setRemarks("Important");
                } 
                

              
            }  
        };


        const createSubTask = (e) => {

            if( theSubtask.length <= 1 )
            {
                alert("Please fill more Subtask.")
            }
            else
            {
                let newSubTask ={

                    theSubtask,
                };
                //to stop auto refresh
           
                //to accumulate
                setSubtask(newSubTask)
                let existingList = theSubtasks
                existingList.push(newSubTask);
                setSubtasks(existingList);
                console.log(theSubtasks);

                    }  
        };

        //for subtasks
        // const handleAddSubTask = () => {
        //     setSubtask([...theSubtask, '']);
            
        //   };

        //   console.log(handleAddSubTask);
        
        //   const handleSubTaskChange = (index, value) => {
        //     const updatedSubTasks = [...theSubtask];
        //     updatedSubTasks[index] = value;
        //     setSubtask(updatedSubTasks);
        //   };

  return (
    <>
    <center>
    <div>
    <h1>My Scheduled Tasks</h1>
    <hr/>
       <form>
            <p>Enter Task Name: <input onChange={(e)=>{setTask(e.target.value)}} type="text"/> </p>
            <p> 
                <div class="slidecontainer">
                    <label>Enter Priority Level:  </label>
                    <input onChange={(e)=>{setLevel(e.target.value)}} type="range" min="1" max="10"/>
                    <p>{theLevel}</p>      
                </div> 
            </p>
         
            {/* <div>
                <label>Sub Tasks:</label>
                {theSubtask.map  ((subTask, index) => ( 
                
                    <input
                    key={index}
                    type="text"
                    value={subTask}
                    onChange={(e) => handleSubTaskChange(index, e.target.value)}
                    />
                ))}
                <button type="button" onClick={handleAddSubTask}>
                    Add Sub Task
                </button>
            </div> */}
            <div>
            {theSubtasks.map((element,index)=>(
                <input
            
                    type="text"
                    value={element}
                    onChange={(e) => setSubtask(index, e.target.value)}
                    />
                
                    
            ))}
            <button type="button" onClick={createSubTask}>
                    Add Sub Task
                </button>
               
            </div>

            
           
            <p>Enter Task Description: <textarea onChange={(e)=>{setDescription(e.target.value)}}></textarea></p>
            <p>Enter Task Duration in Minutes: <input onChange={(e)=>{setDuration(e.target.value)}} type="text"/></p>
            <p><button type="submit" onClick={(e)=>{createTask(e)}}>Register</button></p>
        </form>
    </div>

    <div>
          <hr/>         
          <h2>List of My Tasks</h2>
          <hr/>
          {theTasks.length > 0 && (
            <div>
              {theTasks.map((element, index) => { 
 
                let hours;
                hours = element.theDuration/60;

                let anotherRemarks;
                if(hours >= 24)
                {
                    anotherRemarks= "Long Task";
                }
                else 
                {
                    anotherRemarks= "Short Task";
                }

                 //Remarks for Level
                
                const theRemarks1 =()=> {
                    if(element.theLevel < 3)
                {
                    return "Not Important";
                }
                else if (element.theLevel >= 4 && element.theLevel <= 7)
                {
                    return "Standard";
                }
                else
                {
                    return "Important";
                }

                }
                
                

              

                return (
                <div key={index}>
                    <p>{index+1}. {element.theTask} </p>
                    <p>{theRemarks1(theLevel)}   </p>
                    <p>Sub Tasks:</p>
                    <p>
               
                            <li>{element.theSubtask}</li>
                      
                    </p>
                    <p>{element.theDescription}</p>
                    <p> {hours} hours: {anotherRemarks}</p>
                </div>
        
                );
              })}
            </div>
          )}
        </div>
        </center>
    </>
  )
}

export default ScheduleForm
