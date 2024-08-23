import { createContext, useContext, useReducer } from "react";

const TodosContext = createContext();

const initialState = {
  todos: [],
  done: [],
};

function todosReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "MARK_DONE":
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload),
        done: [...state.done, state.todos[action.payload]],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload),
      };
    default:
      return state;
  }
}

export function TodosProvider({ children }) {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}
