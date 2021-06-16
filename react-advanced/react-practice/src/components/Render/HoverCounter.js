import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class HoverCounter extends Component {
    render() {
        const { count, incrementCount, theme } = this.props;
        const style = theme === 'dark' ? { backgroundColor: 'black', color: 'white' } : null;
        return (
            <div>
                <h1 onMouseOver={incrementCount} style={style}>
                    Hovered {count} items
                </h1>
            </div>
        );
    }
}

export default HoverCounter;
