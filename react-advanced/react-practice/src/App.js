import React from 'react';
import './App.css';
import ThemeContext from './components/contexts/ThemeContext';
import ClickedCounter from './components/Render/ClickCounter';
import Counter from './components/Render/Counter';
import Section from './components/Render/Section';

class App extends React.PureComponent {
    state = {
        // eslint-disable-next-line react/no-unused-state
        theme: 'dark',
        // eslint-disable-next-line react/no-unused-state
        switchTheme: () => {
            this.setState((theme) => {
                if (theme.theme === 'dark') {
                    return {
                        theme: 'light',
                    };
                }
                return {
                    theme: 'dark',
                };
            });
        },
    };

    render() {
        return (
            <div className="App">
                {/* <ClickedCounter /> */}
                {/* <HoverCounter /> */}
                {/* <User render={() => 'Hello'} /> */}
                <Counter
                    render={(count, incrementCount) => (
                        <ClickedCounter count={count} incrementCount={incrementCount} />
                    )}
                />
                <ThemeContext.Provider value={this.state}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default App;
