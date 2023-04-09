import { FC, useState } from "react";

interface IFormProps {
    setTasks: React.Dispatch<React.SetStateAction<{todo: string, id: number}[]>>,
    setIds: React.Dispatch<React.SetStateAction<number>>,
    ids: number;
}

const Form: FC<IFormProps> = ({ setTasks, setIds, ids }) => {

    const [formValue, setFormValue] = useState('');

    const onAddTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIds(ids + 1);
        if (formValue.length !== 0) setTasks(oldTasks => [...oldTasks, { todo: formValue, id: ids }]);
        setFormValue('');
    }

    const onFormChange = (e: React.ChangeEvent<{value: string}>) => {
        setFormValue(e.target.value);
    }

    return (
            <form>
                <input type="text" onChange={onFormChange} value={formValue} />
                <button onClick={onAddTask} type="submit">add</button>
            </form>
    );
};

export default Form;