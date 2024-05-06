import { useDispatch } from "react-redux";
import { addNewTasks } from "@/lib/features/toDoApp/toDoAppSlice";
import { useState } from "react";
import Styles from "@/Assets/to-do-app/Styles/to-do-app.module.css"

export default function TodoItem() {
    const dispatch = useDispatch();
    const [taskForSubmit, setTaskForSubmit] = useState({
      name: "",
      description: "",
    });
  
    const handleChange = (e) => {
      setTaskForSubmit({
        ...taskForSubmit,
        [e.target.name]: e.target.value,
      });
    };
  
    function handleClick() {
      dispatch(addNewTasks(taskForSubmit));
      setTaskForSubmit({ name: "", description: "" });
    }
  
    return (
      <>
        <fieldset className={Styles.fieldset}>
          <legend className={Styles.legend}>To-do</legend>
          <label htmlFor="name" className={Styles.label}>
            Enter task:
            <br />
            <input
              id="name"
              type="text"
              name="name"
              value={taskForSubmit.name}
              onChange={handleChange}
            />
          </label>
          <input
            type="submit"
            value="Add"
            onClick={handleClick}
            className={Styles.button}
          />
          <br />
  
          <label htmlFor="description" className={Styles.label}>
            Enter description:
            <br />
            <textarea
              id="description"
              name="description"
              type="text"
              value={taskForSubmit.description}
              onChange={handleChange}
              className={Styles.largeinput}
            ></textarea>
          </label>
        </fieldset>
      </>
    );
  }