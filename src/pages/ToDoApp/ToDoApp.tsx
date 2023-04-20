import { useState } from 'react';
import Form from './ToDo/Form/Form';
import Tasks from './ToDo/Tasks/Tasks';
import './ToDoApp.css';

function ToDoApp() {
  const [tasks, setTasks]= useState([{ todo: "make this app", id: 1 }, { todo: "make classes work", id: 2 }, { todo: "polish the code", id: 3 }]);
  const [ids, setIds] = useState(4);

  const removeTodoItem = (id: number) => {
    const newToDo = tasks.filter(task => task.id !== id);
    setTasks(newToDo);
  }

  return (
    <div className="todo-app">
      <h1>To Do List</h1>
      <Form setTasks={setTasks} setIds={setIds} ids={ids} />
      <Tasks tasks={tasks} removeTodoItem={removeTodoItem} />
    </div>
  );
}

export default ToDoApp;
