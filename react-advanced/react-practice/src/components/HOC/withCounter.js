import React from 'react';

const withCounter = (OriginalComponent) => {
    class NewComponent extends React.PureComponent {
        state = {
            count: 0,
        };

        handleIncrementCount = () => {
            this.setState((prevState) => ({ count: prevState.count + 1 }));
        };

        render() {
            const { count } = this.state;
            return (
                <OriginalComponent count={count} handleIncrementCount={this.handleIncrementCount} />
            );
        }
    }
    return NewComponent;
};

export default withCounter;
