import { Task } from "../../interfaces";
import { ListAction } from "../actions";
const initialState: Task[] = [];



const taskListReducer = (state: Task[] = initialState, action: ListAction) => {
  switch (action.type) {
    case "addTask":
      return [...state, action.task];
    case "removeTask":
      state.filter((task) => {
        return task.id !== action.task.id;
      });
      return state;
    default:
      return state;
  }
};

export default taskListReducer;