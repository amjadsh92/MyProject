import { useSelector, useDispatch } from "react-redux";
import { deleteTasks, showTask } from "@/lib/features/toDoApp/toDoAppSlice";
import Styles from "@/Assets/to-do-app/Styles/to-do-app.module.css"


export default function TodoOverviewList() {
    const tasks = useSelector((state) => state.toDo.tasks);
  
    return (
      <>
        <fieldset className={Styles.fieldset}>
          <legend className={Styles.legend}> To-do-items</legend>
          {tasks.map((task) => (
            <RenderOverviewList task={task} key={task.id} />
          ))}
        </fieldset>
      </>
    );
  }
  
  function RenderOverviewList({ task }) {
    const dispatch = useDispatch();
    return (
      <>
        <div className={Styles.div1}>
          <p className={Styles.task}> Task: {task.name} </p>
          <button
            className={Styles.button}
            type="submit"
            onClick={() => dispatch(deleteTasks(task.id))}
          >
            {" "}
            Delete{" "}
          </button>
          <button
            className={Styles.button}
            type="submit"
            onClick={() => dispatch(showTask(task.id))}
          >
            {" "}
            Show{" "}
          </button>
        </div>
      </>
    );
  }