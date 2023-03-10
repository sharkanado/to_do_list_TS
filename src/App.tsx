import React, { useState } from "react";
import { X, Check } from "@phosphor-icons/react";

import "./index.css";

function App() {
  type Task = {
    id: number;
    todo: string;
    isDone: boolean;
  };
  const [task, setTask] = useState<string>("");
  const [taskArr, setTaskArr] = useState<Task[]>([]);
  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    setTaskArr([...taskArr, { id: Date.now(), todo: task, isDone: false }]);
    setTask("");
  };

  return (
    <div className="flex flex-col gap-10 h-screen justify-center mx-auto text-center">
      <h1 className="text-white font-bold text-4xl mt-10">Task list</h1>
      <div>
        <form onSubmit={addTask}>
          <input
            type="text"
            onChange={(e) => {
              setTask(e.target.value);
            }}
            className="px-4 py-2 mx-2"
            placeholder="Task..."
          />
          <button
            onClick={(e) => {
              addTask(e);
            }}
            className="bg-gray-500 py-2 px-4 mx-2 hover:bg-gray-600 active:bg-gray-800 transition-all text-white font-bold"
          >
            Add
          </button>
        </form>
      </div>
      <div className="flex flex-1 mx-20 mb-10">
        <div className="flex-1 bg-red-300 m-5 p-5">
          <h2 className="font-bold text-gray-700 text-2xl mb-5">To do</h2>
          <ul className="flex-col flex gap-5">
            {taskArr.map((item, idx) => (
              <li
                key={idx}
                className="bg-white text-black w-full text-left h-14 px-5 justify-center flex flex-col"
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-col justify-center">{item.todo}</div>
                  <div className="flex gap-5 items-center">
                    <button className="rounded-full bg-red-300 hover:bg-red-400 active:bg-red-500 text-white p-2">
                      <X weight="bold" size={20} />
                    </button>
                    <button className="hover:bg-gray-100 rounded-full p-1 active:bg-gray-200">
                      <Check size={20} weight="bold" className="text-green-600" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 bg-green-300 m-5 p-5">
          <h2 className="font-bold text-gray-700 text-2xl mb-5">Done</h2>
          <ul className="flex-col flex gap-5"></ul>
        </div>
      </div>
    </div>
  );
}

export default App;
