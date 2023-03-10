import { X, Check } from "@phosphor-icons/react";
import { Task } from "../interfaces";

interface Props {
  task: Task;
  completeTask(n: number): void;
  markAsDone(t: Task): void;
}

const TodoTask = ({ task, completeTask, markAsDone }: Props) => {
  return (
    <div className="bg-white text-black w-full text-left h-14 px-5 justify-center flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center">{task.todo}</div>
        <div className="flex gap-5 items-center">
          <button
            onClick={() => completeTask(task.id)}
            className="rounded-full bg-red-300 hover:bg-red-400 active:bg-red-500 text-white p-2"
          >
            <X weight="bold" size={20} />
          </button>
          {task.isDone === false && (
            <button
              onClick={() => {
                markAsDone(task);
              }}
              className="hover:bg-gray-100 rounded-full p-2 active:bg-gray-200"
            >
              <Check size={20} weight="bold" className="text-green-600" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default TodoTask;
