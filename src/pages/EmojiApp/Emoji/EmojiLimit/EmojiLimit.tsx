import { FC } from 'react';
import './EmojiLimit.css'

interface IEmojiLimitProps {
    getSelectedValue: (e: React.ChangeEvent<{ value: string }>) => void;
}

const EmojiLimit: FC<IEmojiLimitProps> = ({ getSelectedValue }) => {

    return (
        <form className="emoji-limit">
            <label> Limit items </label>
            <select onChange={getSelectedValue}>
                <option value="15"> 15
                </option>
                <option value="30"> 30
                </option>
                <option value="50"> 50
                </option>
                <option> All
                </option>
            </select>
        </form>
    );
};

export default EmojiLimit;