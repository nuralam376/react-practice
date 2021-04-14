import React, { PureComponent } from 'react';
import Button from './Button';

class Clock extends PureComponent {
    state = {
        date: new Date().toLocaleTimeString(),
        locale: 'bn-bd',
    };
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         date: new Date().toLocaleTimeString(),
    //     };
    //  this.handleClick = this.handleClick.bind(this)
    // }

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clearTimer);
    }

    handleClick = (locale) => {
        console.log('Locale', locale);
        this.setState({
            locale,
        });
    };

    tick() {
        const { locale } = this.state;
        this.setState({
            date: new Date().toLocaleTimeString(locale),
        });
    }

    render() {
        const { date, locale } = this.state;
        let button;
        console.log('Locale2', locale);
        if (locale === 'bn-bd') {
            button = (
                <Button type="button" change={this.handleClick} locale="en-US">
                    Change to bd
                </Button>
            );
        } else {
            button = (
                <Button type="button" change={this.handleClick} locale="bn-bd">
                    Change to eng
                </Button>
            );
        }
        const todos = [1, 2, 3];
        return (
            <>
                <h1>{date}</h1>
                {button}
                {locale === 'bn-bd' ? (
                    <Button change={this.handleClick} locale="en-us" show={false} enable />
                ) : (
                    <Button change={this.handleClick} locale="bn-bd" show enable={false} />
                )}
                {todos.map((td) => (
                    <Button key={td} change={this.handleClick} locale="bn-bd" enable />
                ))}
            </>
        );
    }
}

export default Clock;
