import React, { ChangeEvent, useState } from "react";
import TodoTask from "./components/TodoTask";
import { Task } from "./interfaces";

import "./index.css";

function App() {
  const [task, setTask] = useState<string>("");
  const [taskArr, setTaskArr] = useState<Task[]>([]);
  const [doneArr, setDoneArr] = useState<Task[]>([]);
  const addTask = (): void => {
    setTaskArr([...taskArr, { id: Date.now(), todo: task, isDone: false }]);
    setTask("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value);
  };

  const deleteTask = (taskID: number): void => {
    setTaskArr(
      taskArr.filter((task) => {
        return task.id !== taskID;
      })
    );
  };

  const deleteDoneTask = (taskID: number): void => {
    setDoneArr(
      doneArr.filter((task) => {
        return task.id !== taskID;
      })
    );
  };

  const markAsDone = (task: Task): void => {
    setTaskArr(
      taskArr.filter((t) => {
        if (task.id === t.id) {
          task.isDone = true;
          setDoneArr([...doneArr, t]);
        } else return task;
      })
    );
  };
  return (
    <div className="flex flex-col gap-10 h-screen justify-center mx-auto text-center">
      <h1 className="text-white font-bold text-4xl mt-10">Task list</h1>
      <div>
        <input
          value={task}
          type="text"
          onChange={handleChange}
          className="px-4 py-2 mx-2"
          placeholder="Task..."
        />
        <button
          onClick={addTask}
          className="bg-gray-500 py-2 px-4 mx-2 hover:bg-gray-600 active:bg-gray-800 transition-all text-white font-bold"
        >
          Add
        </button>
      </div>
      <div className="flex flex-1 mx-20 mb-10">
        <div className="flex-1 bg-red-300 m-5 p-5">
          <h2 className="font-bold text-gray-700 text-2xl mb-5">To do</h2>
          <div className="flex-col flex gap-5">
            {taskArr.map((item: Task, idx: number) => (
              <TodoTask
                task={item}
                key={idx}
                deleteTask={deleteTask}
                markAsDone={markAsDone}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 bg-green-300 m-5 p-5">
          <h2 className="font-bold text-gray-700 text-2xl mb-5">Done</h2>
          <div className="flex-col flex gap-5">
            {doneArr.map((item: Task, idx: number) => (
              <TodoTask
                task={item}
                key={idx}
                deleteTask={deleteDoneTask}
                markAsDone={markAsDone}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
