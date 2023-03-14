import { Task } from "../../interfaces";
interface AddTask {
  type: "addTask";
  task: Task;
}

interface RemoveTask {
  type: "removeTask";
  task: Task;
}


export type ListAction = AddTask | RemoveTask;

