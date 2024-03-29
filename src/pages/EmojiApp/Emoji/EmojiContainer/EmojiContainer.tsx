import { FC, PropsWithChildren, useState, useEffect } from 'react';
import NotFound from "../NotFound/NotFound";
import EmojiRow from "../EmojiRow/EmojiRow";
import { TEmojiItem } from '../../../../services/emojiData';
import getEmojis from "../../../../services/emojiData";
import './EmojiContainer.css';

interface IEmojiContainerProps {
    search: string;
    limit: number;
}

const EmojiContainer: FC<PropsWithChildren<IEmojiContainerProps>> = ({ search, limit }) => {

    const [serverEmojis, setServerEmojis] = useState<TEmojiItem[]>([{
        title: "100",
        symbol: "💯",
        keywords: "keyword"
    }])

    const updateServerEmojis = () => {
        getEmojis().then(emojis => {
            setServerEmojis(emojis)
        })
    }

    useEffect(() => updateServerEmojis(), []);

    const filteredEmojis = serverEmojis.filter(emoji => emoji.title.toLowerCase().includes(search) || emoji.keywords.toLowerCase().includes(search));

    if (filteredEmojis.length > limit) {
        filteredEmojis.length = limit;
    } else if (filteredEmojis.length === 0) {
        return <NotFound />
    } else {
        filteredEmojis.length = serverEmojis.length;
    }

    return (
        <div className="emoji-container">
            {filteredEmojis.map(emoji => <EmojiRow item={emoji} key={emoji.title} />)}
        </div>
    );
};

export default EmojiContainer;