import logo from './logo.svg';
import './App.css';
import { TodosProvider } from "./context/todosProvider";
import TodoApp from './componnets/todo';

function App() {
  return (
   <TodosProvider>
    <TodoApp >
      
    </TodoApp>
  </TodosProvider>)
}

export default App;
