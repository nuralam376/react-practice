import React, { PureComponent } from 'react';

class Clock extends PureComponent {
    state = {
        date: new Date().toLocaleTimeString(),
    };
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         date: new Date().toLocaleTimeString(),
    //     };
    // }

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clearTimer);
    }

    tick() {
        this.setState({
            date: new Date().toLocaleTimeString(),
        });
    }

    render() {
        const { date } = this.state;
        return <h1>{date}</h1>;
    }
}

export default Clock;
