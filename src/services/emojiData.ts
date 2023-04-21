export type TEmojiItem = {
    keywords: string;
    symbol: string;
    title: string;
}

const getEmojis = async (): Promise<TEmojiItem[]> => {
    const emojis = await fetch('emojiList.json').then(emojis => emojis.json());

    return emojis;
}

export default getEmojis;