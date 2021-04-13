import React from 'react';

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;

        if (currentChange === nextChange && currentLocale === nextLocale) {
            return false;
        }
        return true;
    }

    render() {
        const { change } = this.props;
        console.log('Button component');
        return (
            <button type="button" onClick={() => change('en-us')}>
                Change Locale
            </button>
        );
    }
}

export default Button;
