"use client";
import { useEffect } from "react";
import Styles from "@/Assets/to-do-app/Styles/to-do-app.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "@/lib/features/toDoApp/toDoAppSlice";
import SubmitItem from "@/components/toDoApp/SubmitItem";
import ListOfItems from "@/components/toDoApp/ListOfItems";
import ItemDetails from "@/components/toDoApp/ItemDetails";

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
      <SubmitItem dispatch={dispatch} />
      <ListOfItems dispatch={dispatch} />
      <ItemDetails dispatch={dispatch} />
    </div>
  );
}
