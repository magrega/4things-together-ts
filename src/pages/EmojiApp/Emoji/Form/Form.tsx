import { FC } from 'react';
import './Form.css';

interface IFormProps {
    onFormChange: (e: React.ChangeEvent<{ value: string }>) => void;
    formValue: string;
}

const Form: FC<IFormProps> = ({ onFormChange, formValue }) => {

    return (
        <input
            type="text"
            className="search-bar"
            onChange={onFormChange}
            value={formValue}
            placeholder="type something..."
        />
    );
};

export default Form;