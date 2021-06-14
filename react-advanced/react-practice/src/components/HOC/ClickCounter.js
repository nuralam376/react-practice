import React, { Component } from 'react';
import withCounter from './withCounter';

// eslint-disable-next-line react/prefer-stateless-function
class ClickCounter extends Component {
    // state = {
    //     count: 0,
    // };

    // incrementClickedCount = () => {
    //     this.setState((prevState) => ({
    //         count: prevState.count + 1,
    //     }));
    // };

    render() {
        const { count, handleIncrementCount } = this.props;
        return (
            <div>
                <button type="button" onClick={handleIncrementCount}>
                    Clicked {count} times
                </button>
            </div>
        );
    }
}

export default withCounter(ClickCounter);
