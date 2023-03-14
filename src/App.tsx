import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";
import { State } from "./state";
import TodoTask from "./components/TodoTask";
import { Task } from "./interfaces";

import "./index.css";

function App() {
  const [task, setTask] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value);
  };
  const todoList = useSelector((state: State) => state.taskList);
  const dispatch = useDispatch();
  const { addTask, removeTask } = bindActionCreators(actionCreators, dispatch);

  const deleteTask = (taskID: number): void => {
    const task = todoList.find((t) => t.id === taskID);
    if (task) removeTask(task);
  };

  return (
    <div className="flex flex-col gap-10 h-screen justify-center mx-auto text-center">
      <h1 className="text-white font-bold text-4xl mt-10">Task list</h1>
      <div>
        <input
          type="text"
          onChange={handleChange}
          className="px-4 py-2 mx-2"
          placeholder="Task..."
        />

        <button
          onClick={() => {
            addTask({ id: Date.now(), todo: task });
          }}
          className="bg-gray-500 py-2 px-4 mx-2 hover:bg-gray-600 active:bg-gray-800 transition-all text-white font-bold"
        >
          Add
        </button>
      </div>
      <div className="flex flex-1 mx-20 mb-10">
        <div className="flex-1 bg-red-300 m-5 p-5">
          <h2 className="font-bold text-gray-700 text-2xl mb-5">To do</h2>
          <div className="flex-col flex gap-5">
            {todoList.map((item: Task, idx: number) => (
              <TodoTask
                key={idx}
                task={item}
                deleteTask={() => deleteTask(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
