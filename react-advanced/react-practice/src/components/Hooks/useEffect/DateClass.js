import React, { Component } from 'react';

class DateClass extends Component {
    state = {
        date: new Date(),
        count: 0,
    };

    componentDidMount() {
        const { count } = this.state;
        document.title = `Count ${count} times`;
        this.interval = setInterval(this.tick, 1000);
    }

    componentDidUpdate() {
        const { count } = this.state;
        document.title = `Count ${count} times`;
        setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        this.setState({
            count: 0,
        });
        clearInterval(this.interval);
    }

    addClick = () => {
        this.setState(({ count }) => ({
            count: count + 1,
        }));
    };

    tick = () => {
        this.setState({
            date: new Date(),
        });
    };

    render() {
        const { date } = this.state;
        return (
            <div>
                <h1>{date.toLocaleTimeString()}</h1>
                <p>
                    <button type="button" onClick={this.addClick}>
                        Click
                    </button>
                </p>
            </div>
        );
    }
}

export default DateClass;
