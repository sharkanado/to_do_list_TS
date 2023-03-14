import { X, Check } from "@phosphor-icons/react";
import { Task } from "../interfaces";

interface Props {
  task: Task;
  deleteTask(n: number): void;
}

const TodoTask = ({ task, deleteTask }: Props) => {
  return (
    <div className="bg-white text-black w-full text-left h-14 px-5 justify-center flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center">{task.todo}</div>
        <div className="flex gap-5 items-center">
          <button
            className="rounded-full bg-red-300 hover:bg-red-400 active:bg-red-500 text-white p-2"
            onClick={() => deleteTask(task.id)}
          >
            <X weight="bold" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoTask;
