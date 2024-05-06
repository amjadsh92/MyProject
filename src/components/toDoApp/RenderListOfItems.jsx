import { useSelector, useDispatch } from "react-redux";
import Styles from "@/Assets/to-do-app/Styles/to-do-app.module.css"
import { deleteTasks } from "@/lib/features/toDoApp/toDoAppSlice";
import { showTask } from "@/lib/features/toDoApp/toDoAppSlice";



export default function RenderListOfItems({ task }) {
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