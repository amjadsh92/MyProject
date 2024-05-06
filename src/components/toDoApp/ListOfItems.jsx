import { useSelector} from "react-redux";
import Styles from "@/Assets/to-do-app/Styles/to-do-app.module.css"
import RenderListOfItems from "./RenderListOfItems";


export default function ListOfItems({dispatch}) {
    const tasks = useSelector((state) => state.toDo.tasks);
  
    return (
      <>
        <fieldset className={Styles.fieldset}>
          <legend className={Styles.legend}> To-do-items</legend>
          {tasks.map((task) => (
            <RenderListOfItems task={task} dispatch={dispatch} key={task.id} />
          ))}
        </fieldset>
      </>
    );
  }
  
  