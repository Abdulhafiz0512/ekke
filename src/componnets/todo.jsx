import { useState } from "react";
import { useTodos } from "../context/todosProvider";

function TodoApp() {
  const { state, dispatch } = useTodos();
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setNewTodo("");
    }
  };

  const markDone = (index) => {
    dispatch({ type: "MARK_DONE", payload: index });
  };

  const deleteTodo = (index) => {
    dispatch({ type: "DELETE_TODO", payload: index });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="mb-4 flex">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task"
            className="input input-bordered w-full bg-gray-900 text-white placeholder-gray-400"
          />
          <button
            onClick={addTodo}
            className="ml-2 btn flex text-[32px] btn-primary items-center justify-center"
          >
            +
          </button>
        </div>

        <h2 className="text-xl text-white mb-2">Tasks to do - {state.todos.length}</h2>
        <ul className="mb-4">
          {state.todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-700 text-white p-2 mb-2 rounded-lg"
            >
              <span>{todo}</span>
              <div className="flex space-x-2">
                <button onClick={() => markDone(index)} className="btn btn-sm btn-outline btn-success">
                  ✓
                </button>
                <button onClick={() => deleteTodo(index)} className="btn btn-sm btn-outline btn-error">
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>

        <h2 className="text-xl text-white mb-2">Done - {state.done.length}</h2>
        <ul>
          {state.done.map((todo, index) => (
            <li
              key={index}
              className="bg-gray-700 text-green-400 p-2 mb-2 rounded-lg"
            >
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
