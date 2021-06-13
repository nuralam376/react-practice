import React from 'react';

class Emoji extends React.PureComponent {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render(override) {
        let text = 'Hello JavaScript';

        if (override) text = override;

        return <h1>{text}</h1>;
    }
}

export default Emoji;
