import { FC, useState } from 'react';
import './Task.css';

export interface ITaskProps {
    task: {
        todo: string;
        id: number;
    },
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