import { Dispatch } from "redux";
import { Task } from "../../interfaces";
import { ListAction } from "../actions";


export const addTask = (todoTask: Task) => {
    return (dispatch: Dispatch<ListAction>) => {
      dispatch({
        type: "addTask",
        task: todoTask,
      });
    };
  };


export const removeTask = (todoTask: Task) => {
    return (dispatch: Dispatch<ListAction>) => {
      dispatch({
        type: "removeTask",
        task: todoTask,
      });
    };
  };
