import React from 'react';
import ThemeContext from '../contexts/ThemeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

function Content() {
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(count, incrementCount) => (
                    <ThemeContext.Consumer>
                        {(value) => (
                            <HoverCounter
                                count={count}
                                incrementCount={incrementCount}
                                theme={value}
                            />
                        )}
                    </ThemeContext.Consumer>
                )}
            </Counter>
        </div>
    );
}

export default Content;
