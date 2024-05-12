import Styles from "@/Assets/to-do-app/Styles/to-do-app.module.css";
import RenderItemDetails from "./RenderItemDetails";

export default function ItemDetails({ dispatch }) {
  return (
    <>
      <fieldset className={Styles.fieldset}>
        <legend className={Styles.legend}> Details</legend>
        <RenderItemDetails dispatch={dispatch} />
      </fieldset>
    </>
  );
}
