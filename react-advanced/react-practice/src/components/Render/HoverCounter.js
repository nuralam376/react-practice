import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class HoverCounter extends Component {
    render() {
        const { count, incrementCount } = this.props;
        return (
            <div>
                <h1 onMouseOver={incrementCount}>Hovered {count} items</h1>
            </div>
        );
    }
}

export default HoverCounter;
