import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskCreate({ task, taskFormUpdate, onUpdate }) {
  const { createTask, editTaskById } = useContext(TasksContext);

  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDesc);
      // editTaskById(task.id, title, taskDesc);
    } else {
      createTask(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="taskUpdate">
          <h3>Lütfen Taskı Düzenleyiniz!</h3>
          <form className="taskForm">
            <label className="taskLabel">Başlığı Düzenleyiniz</label>
            <input
              value={title}
              onChange={handleChange}
              className="taskInput"
            />
            <label className="taskLabel">Taskı Düzenleyiniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="taskInput"
              rows="5"
            ></textarea>
            <button className="taskButton updateButton" onClick={handleSubmit}>
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="taskCreateDiv">
          <h3>Lütfen Task Ekleyiniz</h3>
          <form className="taskForm">
            <label className="taskLabel">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="taskInput"
            />
            <label className="taskLabel">Task Giriniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="taskInput"
              rows="5"
            ></textarea>
            <button className="taskButton" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
