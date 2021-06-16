import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

// class Content extends React.PureComponent {
//     render() {
//         const { theme, switchTheme } = this.context;
//         return (
//             <div>
//                 <h1>This is a content</h1>
//                 <Counter>
//                     {(count, incrementCount) => (
//                         <HoverCounter
//                             count={count}
//                             incrementCount={incrementCount}
//                             theme={theme}
//                             switchTheme={switchTheme}
//                         />
//                     )}
//                 </Counter>
//             </div>
//         );
//     }
// }

// Content.contextType = ThemeContext;

const Content = () => {
    const context = useContext(ThemeContext);
    const { theme, switchTheme } = context;
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(count, incrementCount) => (
                    <HoverCounter
                        count={count}
                        incrementCount={incrementCount}
                        theme={theme}
                        switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </div>
    );
};

export default Content;
