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
        console.log('Clock Component');
        const { date, locale } = this.state;
        return (
            <>
                <h1>{date}</h1>
                <Button change={this.handleClick} locale={locale} />
            </>
        );
    }
}

export default Clock;
