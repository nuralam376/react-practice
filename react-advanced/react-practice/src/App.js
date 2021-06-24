import React, { useState } from 'react';
import './App.css';
// import DateClass from './components/Hooks/useEffect/DateClass';
import DateFunction from './components/Hooks/useEffect/DateFunction';

// class App extends React.PureComponent {
//     state = {
//         // eslint-disable-next-line react/no-unused-state
//         theme: 'dark',
//         // eslint-disable-next-line react/no-unused-state
//         switchTheme: () => {
//             this.setState((theme) => {
//                 if (theme.theme === 'dark') {
//                     return {
//                         theme: 'light',
//                     };
//                 }
//                 return {
//                     theme: 'dark',
//                 };
//             });
//         },
//     };

//     render() {
//         return (
//             <div className="App">
//                 {/* <ClickedCounter /> */}
//                 {/* <HoverCounter /> */}
//                 {/* <User render={() => 'Hello'} /> */}
//                 <Counter
//                     render={(count, incrementCount) => (
//                         <ClickedCounter count={count} incrementCount={incrementCount} />
//                     )}
//                 />
//                 <ThemeContext.Provider value={this.state}>
//                     <Section />
//                 </ThemeContext.Provider>
//             </div>
//         );
//     }
// }

function App() {
    const [show, setShow] = useState(true);
    return (
        <div>
            {/* <TodoClass />
            <Todo />
            <Counter /> */}
            {/* <DateClass /> */}
            {show && <DateFunction />}
            <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
                {show ? 'Hide' : 'Show'}
            </button>
        </div>
    );
}
export default App;
