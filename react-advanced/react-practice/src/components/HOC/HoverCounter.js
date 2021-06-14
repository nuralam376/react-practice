import React, { Component } from 'react';
import withCounter from './withCounter';

// eslint-disable-next-line react/prefer-stateless-function
class HoverCounter extends Component {
    // state = {
    //     count: 0,
    // };

    // incrementHoveredCount = () => {
    //     this.setState((prevState) => ({ count: prevState.count + 1 }));
    // };

    render() {
        const { count, handleIncrementCount } = this.props;
        return (
            <div>
                <h1 onMouseOver={handleIncrementCount}>Hovered {count} times</h1>
            </div>
        );
    }
}

export default withCounter(HoverCounter);
