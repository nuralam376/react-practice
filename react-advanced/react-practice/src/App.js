import React from 'react';
import './App.css';
import Counter from './components/Hooks/Counter';
import Todo from './components/Hooks/Todo';
import TodoClass from './components/Hooks/TodoClass';

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
    return (
        <div>
            <TodoClass />
            <Todo />
            <Counter />
        </div>
    );
}
export default App;
