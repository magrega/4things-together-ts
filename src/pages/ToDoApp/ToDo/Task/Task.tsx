import { FC, useState } from 'react';
import './Task.css';

export type ToDoItem = {
    todo: string;
    id: number;
}

export interface ITaskProps {
    task: ToDoItem;
    removeTodoItem: (id: number) => void;
}

const Task: FC<ITaskProps> = ({ task, removeTodoItem }) => {

    const [isImportant, setImportant] = useState(false);

    const important = () => {
        setImportant(!isImportant);
    }

    const deleteItem = () => removeTodoItem(task.id);

    return (
        <li className='task__item'>
            <span className={isImportant ? "important-task" : ''}>{task.todo}</span>
            <div>
                <button onClick={important}>Important</button>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </li>
    );
};

export default Task;