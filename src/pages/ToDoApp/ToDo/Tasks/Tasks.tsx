import Task, {ToDoItem} from "../Task/Task";
import { FC } from 'react';

export interface ITaskProps {
    tasks: ToDoItem[],
    removeTodoItem: (id: number) => void;
}

const Tasks: FC<ITaskProps> = ({ tasks, removeTodoItem }) => {

    return (
        <ul>
            {tasks.map(task => <Task key={task.id} task={task} removeTodoItem={removeTodoItem} />)}
        </ul>
    );
};

export default Tasks;