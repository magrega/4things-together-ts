const getEmojis = async () => {
    const emojis = await fetch('emojiList.json').then(emojis => emojis.json());

    return emojis;
}

export default getEmojis;