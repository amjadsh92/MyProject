import { useSelector } from "react-redux";
import Styles from "@/Assets/to-do-app/Styles/to-do-app.module.css";
import { hideTask } from "@/lib/features/toDoApp/toDoAppSlice";

export default function RenderItemDetails({ dispatch }) {
  const taskForShow = useSelector((state) => state.toDo.taskToShow);
  if (taskForShow !== null) {
    return (
      <div className={Styles.div}>
        <ul className={Styles.ul}>
          <li>
            Task ID:<p style={{ color: "Maroon" }}>{taskForShow.id}</p>
          </li>
          <li>
            Task title:<p style={{ color: "Maroon" }}>{taskForShow.name}</p>
          </li>
          <li>
            {" "}
            Task description:
            <p style={{ color: "Maroon" }}>{taskForShow.description}</p>
          </li>
        </ul>
        <button
          className={Styles.hide}
          type="submit"
          onClick={() => dispatch(hideTask())}
        >
          {" "}
          Hide{" "}
        </button>
      </div>
    );
  }
}
