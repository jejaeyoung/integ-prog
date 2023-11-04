//INF211_POKEMON_API1_QUILATAN_DANIELSEBASTIAN_115667s@y1
import React from 'react'
import { useState, useEffect } from "react";

function ScheduleFormMidterm() {

    const [tname,setTname]= useState("");
    const [tlevel,setTlevel]= useState(1);
    
    const [tsubtask,setTsubtask]= useState("");
    const [listsubstask,setListsubtask]= useState([]);

    const [tdescription,setTdescription]= useState("");
    const [tduration,setTduration]= useState(0);

    const [task,setTask] = useState({});
    //adding list and deleting lists.
    const [listTasks, setListtasks]=useState([]);

    const addSubtask=()=>{
        let copyList = listsubstask;
        copyList.push(tsubtask);
        setListsubtask(copyList);
    }

    const createTask =()=>{
        alert("Task has been added");
        const theTask = {
            tname,
            tlevel,
            listsubstask,
            tdescription,
            tduration
        }

        setTask(theTask);
        let copyList = listTasks;
        copyList.push(theTask);
        setListtasks(copyList);
        setListsubtask([]);
    }

    const deleteTask =(index)=>{
        const resp = window.confirm("Are you sure you want to delete?")
        if (resp)
        {
            const resp2 = window.confirm("Äre you sure really really sure?")
            if(resp2)
            {
                alert(index +" you are deleting this entry" )
                const updatedTask= listTasks.filter((element)=> {return element.tname!==index})
                setListtasks(updatedTask);
            }
          
        }
      
    }
  return (
    <>
        <p>INF211_POKEMON_API1_QUILATAN_DANIELSEBASTIAN_115667s@y1</p>
        <center>
            <h1>My Scheduled Tasks</h1>
            <hr/>
            <p>Enter Task Name: <input onChange={(e)=>{setTname(e.target.value)}} type="text"/> </p>
            {/* validation for task name */}
                {(tname.length <=3)? <p style={{fontSize:"12px",fontStyle:"italic",color:"red"}}>Task Name should be atleast 4 characters</p>:""}
            <p> 
                <label>Enter Priority Level:  </label>
                <input onChange={(e)=>{setTlevel(e.target.value)}} type="range" min="1" max="10"/>
                <p>{tlevel}</p>
            </p>
            <p>
                <div>
                    <label>Enter Subtask: </label> 
                    <input onChange={(e)=>{setTsubtask(e.target.value)}} type="text"/>
                    <button type="submit" onClick={(e)=>{addSubtask(e)}}>Add Subtask</button>
                </div>
            {/* validation for subtask */}
            {(tsubtask.length <=3)? <p style={{fontSize:"12px",fontStyle:"italic",color:"red"}}>Subtask should be atleast 4 characters</p>:""}
            </p>

            <p>Enter Task Description: <textarea onChange={(e)=>{setTdescription(e.target.value)}}></textarea></p>
            {/* validation for description */}
            {(tdescription.length <=3)? <p style={{fontSize:"12px",fontStyle:"italic",color:"red"}}>Task Description should be atleast 3 characters</p>:""}
            
            <p>Enter Task Duration in Minutes: <input onChange={(e)=>{setTduration(e.target.value)}} type="text"/></p>
            {/* validation for duration */}
            {(tduration < 60)? <p style={{fontSize:"12px",fontStyle:"italic",color:"red"}}>Duration should be minimum of 1 hour or 60 minutes</p>:""}
            
            <p><button type="submit" onClick={(e)=>{createTask(e)}}>Register</button></p>
        </center>

    <center>
        <hr/>

        <h2>List of My Tasks</h2>
        <hr/>
        {listTasks.map((task,index)=>{
            return (
              <>
                <div key={index}>
                  <p>
                    {index + 1}. {task.tname}
                  </p>
                  <p>
                    {task.tlevel} -{" "}
                    {task.tlevel <= 3
                      ? "Not Important"
                      : task.tlevel >= 4 && task.tlevel <= 7
                      ? "Standard"
                      : "Important"}
                      
                  </p>
                  <p style={{ fontWeight: "800" }}>SUBTASKS:</p>
                  <p>
                    <ul>
                      {task.listsubstask.map((element, index) => {
                        return (
                          <>
                            <li key={index}>
                              {index + 1}. {element}
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </p>
                  <p>{task.tdescription}</p>
                  <p>
                    {task.tduration / 60} hours:{" "}
                    {task.tduration / 60 < 24 ? "Short Task" : "Long Task"}
                  </p>
                  <p>
                    <button onClick={() => deleteTask(task.tname)}>
                      Delete This Task
                    </button>
                  </p>
                </div>
                <hr />
              </>
            );
        })}
      
    </center>
    </>
  )
}

export default ScheduleFormMidterm