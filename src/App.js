import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <TaskCreate />
      <h1>Görevlerim</h1>
      <TaskList />
    </div>
  );
}

export default App;
