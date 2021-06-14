import React from 'react';

export default class Bracket extends React.PureComponent {
    addBracket = (text) => `[ ${text} ] `;

    render() {
        const { props } = this;

        return props.children({ addBracket: this.addBracket });
    }
}
