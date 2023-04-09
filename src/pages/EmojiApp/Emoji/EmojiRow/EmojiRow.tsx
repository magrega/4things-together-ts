import { FC } from 'react';
import './EmojiRow.css';

interface IEmojiRowProps {
    item: {
        symbol: string;
        title: string;
    }
}

const EmojiRow: FC<IEmojiRowProps> = ({ item }) => {

    return (
        <div className="emoji-row">
            <span className="emoji-row__symbol">{item.symbol}</span>
            <span className="emoji-row__title">{item.title}</span>
        </div>
    );
};

export default EmojiRow;