import { useState, FC } from 'react';
import Form from './ToDo/Form/Form';
import Tasks from './ToDo/Tasks/Tasks';
import './ToDoApp.css';

export type ToDoItem = {
  todo: string;
  id: number;
}

const ToDoApp: FC = () => {

  const initialTodos: ToDoItem[] = [
    { todo: "make this app", id: 1 }, { todo: "make classes work", id: 2 }, { todo: "polish the code", id: 3 }
  ]

  const [todos, setTodos] = useState(initialTodos);
  const [ids, setIds] = useState(4);

  const removeTodoItem = (id: number) => {
    const newToDo = todos.filter(task => task.id !== id);
    setTodos(newToDo);
  }

  return (
    <div className="todo-app">
      <h1>To Do List</h1>
      <Form setTodos={setTodos} setIds={setIds} ids={ids} />
      <Tasks todos={todos} removeTodoItem={removeTodoItem} />
    </div>
  );
}

export default ToDoApp;
