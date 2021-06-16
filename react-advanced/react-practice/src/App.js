import React from 'react';
import './App.css';
import ThemeContext from './components/contexts/ThemeContext';
import ClickedCounter from './components/Render/ClickCounter';
import Counter from './components/Render/Counter';
import Section from './components/Render/Section';

class App extends React.PureComponent {
    state = {
        theme: 'dark',
    };

    render() {
        const { theme } = this.state;
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
                <ThemeContext.Provider value={theme}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default App;
