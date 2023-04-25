import { FC } from 'react';
import Task from "../Task/Task";
import { ToDoItem } from "../../ToDoApp";

export interface ITaskProps {
    todos: ToDoItem[],
    removeTodoItem: (id: number) => void;
}

const Tasks: FC<ITaskProps> = ({ todos: tasks, removeTodoItem }) => {

    return (
        <>
            {tasks.length === 0 ? <p>No tasks for now</p> : <ul>{tasks.map(task => <Task key={task.id} task={task} removeTodoItem={removeTodoItem} />)}</ul>}
        </>
    );
};

export default Tasks;