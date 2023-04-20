import Task, {ToDoItem} from "../Task/Task";
import { FC } from 'react';

export interface ITaskProps {
    todos: ToDoItem[],
    removeTodoItem: (id: number) => void;
}

const Tasks: FC<ITaskProps> = ({ todos: tasks, removeTodoItem }) => {

    return (
        <ul>
            {tasks.map(task => <Task key={task.id} task={task} removeTodoItem={removeTodoItem} />)}
        </ul>
    );
};

export default Tasks;