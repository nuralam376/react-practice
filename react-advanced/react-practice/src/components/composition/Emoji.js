import React from 'react';

export default class Emoji extends React.PureComponent {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render() {
        const { props } = this;
        return props.children({ addEmoji: this.addEmoji });
    }
}
