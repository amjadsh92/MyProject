"use client"
import {useEffect, useState } from 'react'
import Styles from "./to-do-app.module.css"

import { useSelector, useDispatch } from "react-redux";
import { fetchTasks, addNewTasks, deleteTasks, showTask, hideTask}
  
 from "../../lib/features/toDoApp/toDoAppSlice";

export default function TodoApp() {

  const dispatch = useDispatch();
  const taskStatus = useSelector((state) => state.toDo.status);

  useEffect(() => {
    if (taskStatus === "idle") {
      dispatch(fetchTasks());
    }
  }, [taskStatus, dispatch]);


  

  return (
  
    
    <div className={Styles.main}>
      <h2 className={Styles.title}>Welcome to To-do-list application!</h2>
      <TodoItem />
      <TodoOverviewList />
      <TodoItemDetails />
    </div>
  );
  
}

function TodoItem() {
  const dispatch = useDispatch();
  const [taskForSubmit, setTaskForSubmit] = useState({
    name: "",
    description: "",
  });

  

  const handleChange = (e) => {
    setTaskForSubmit({
      ...taskForSubmit,
      [e.target.name]: e.target.value
    });
  };


  

  function handleClick() {
    dispatch(addNewTasks(taskForSubmit));
    setTaskForSubmit({ name: "", description: "" });
  }

  return (<>
    <fieldset className={Styles.fieldset}>
      <legend className={Styles.legend}>To-do</legend>
      <label htmlFor="name"className={Styles.label}>
        Enter task:<br />
        <input id= "name" type="text" name="name" value={taskForSubmit.name} onChange={handleChange} />
      </label>
      <input type="submit" value="Add" onClick={handleClick} className={Styles.button} /><br />

      <label htmlFor="description" className={Styles.label} >
        Enter description:<br />
        <textarea id="description" name="description" type="text" value={taskForSubmit.description} onChange={handleChange} className={Styles.largeinput}></textarea>
      </label>
    </fieldset>
  </>);
}

function TodoOverviewList() {
  
  const tasks = useSelector((state) => state.toDo.tasks);

  return (<>
    <fieldset className={Styles.fieldset}>
      <legend className={Styles.legend}>  To-do-items</legend>
      {tasks.map((task) => < RenderOverviewList task={task}  key={task.id} />
      )}
    </fieldset>
  </>)
}

function RenderOverviewList({task}) {
  
  const dispatch = useDispatch();
  return (<>
    <div  className={Styles.div1} >
      <p className={Styles.task}> Task: {task.name} </p>
      <button className={Styles.button} type="submit" onClick={() => dispatch(deleteTasks(task.id))} > Delete </button>
      <button className={Styles.button} type="submit" onClick={() => dispatch(showTask(task.id))} > Show </button>
    </div>
  </>)
}

function TodoItemDetails() {
  
  return (<>
    <fieldset className={Styles.fieldset}>
      <legend className={Styles.legend}> Details</legend>
      <RenderItemDetails />
    </fieldset>
  </>)
}

function RenderItemDetails() {
  const dispatch = useDispatch();
  const taskForShow = useSelector((state) => state.toDo.taskToShow)
  if (taskForShow !== null) {
    return (<div className={Styles.div} ><ul className={Styles.ul} >
      <li   >Task ID:<p style={{ color: "Maroon" }} >{taskForShow.id}</p></li>
      <li>Task title:<p style={{ color: "Maroon" }}>{taskForShow.name}</p></li>
      <li> Task description:<p style={{ color: "Maroon" }}>{taskForShow.description}</p></li>
    </ul>
      <button className={Styles.hide} type="submit" onClick={() => dispatch(hideTask())} > Hide </button>
    </div>)
  }
}
