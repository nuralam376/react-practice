import React from 'react';

const Text = ({ addEmoji, addBracket }) => {
    let text = 'Hello JavaScript';

    if (addEmoji) {
        text = addEmoji(text, ':p');
    }
    if (addBracket) {
        text = addBracket(text);
    }

    return <h1>{text}</h1>;
};

export default Text;
