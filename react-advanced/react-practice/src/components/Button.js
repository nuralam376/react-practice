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
        const { change, locale, enable } = this.props;
        if (!enable) return null;
        return (
            <button type="button" onClick={() => change(locale)}>
                {locale === 'bn-bd' ? 'Bangla Clock' : 'English Clock'}
            </button>
        );
    }
}

export default Button;
