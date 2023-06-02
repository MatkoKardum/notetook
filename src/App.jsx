/* eslint-disable react/jsx-key */
import { useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { ImCheckmark } from "react-icons/im";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    newTask.length > 0 &&
      setTaskList([
        ...taskList,
        {
          id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
          taskName: newTask,
          completed: false,
        },
      ]);
  };

  const deleteTask = (id) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const completeTask = (id) => {
    setTaskList(
      taskList.map((task) => {
        return task.id === id ? { ...task, completed: !task.completed } : task;
      })
    );
  };

  return (
    <div className="bg-slate-950 h-screen text-slate-200 p-10">
      <div className="text-center">
        <h1 className="text-8xl">NoteTook</h1>
        <h2 className="text-4xl mt-4 animate-pulse">Note Taking App</h2>
      </div>
      <div className="flex justify-center items-center mt-10">
        <input
          type="text"
          className="w-96 rounded-md pl-2 text-black focus:outline-none h-10"
          onChange={handleChange}
        />
        <BsFillPlusSquareFill className="text-4xl ml-3" onClick={addTask} />
      </div>
      {taskList.length === 0 ? (
        ""
      ) : (
        <div className="flex flex-col bg-slate-800 p-5 rounded-lg text-2xl mt-10 overflow-x-hidden overflow-auto max-h-96">
          {taskList.map((task) => {
            return (
              <div
                className="w-full flex justify-between items-center p-4 mt-4 rounded-md m-auto first:mt-0"
                style={{
                  backgroundColor: task.completed
                    ? "rgb(101 163 13)"
                    : "rgb(100 116 139)",
                }}
              >
                <h1 className="mr-auto">{task.taskName}</h1>
                <MdDelete
                  className="mr-2 hover:text-red-500 cursor-pointer"
                  onClick={() => deleteTask(task.id)}
                />
                <ImCheckmark
                  className="hover:text-green-500 cursor-pointer"
                  onClick={() => completeTask(task.id)}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
