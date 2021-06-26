import React from 'react';
import './App.css';
import Counter from './components/Hooks/useReducer/Counter';

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
    // const [show, setShow] = useState(true);
    return (
        <div>
            {/* <TodoClass />
            <Todo />
            <Counter /> */}
            {/* <DateClass /> */}
            {/* {show && <DateFunction />}
            <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
                {show ? 'Hide' : 'Show'}
            </button> */}
            {/* <UseMemo /> */}
            {/* <Form /> */}
            {/* <Time /> */}
            <Counter />
        </div>
    );
}
export default App;
