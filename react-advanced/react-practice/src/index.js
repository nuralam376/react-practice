// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// function getGreeting(greet) {
//     return `Hello ${greet}`;
// }

// const element = <h1>{getGreeting('World')}</h1>;

// ReactDOM.render(element, document.getElementById('root'));

// setInterval(() => {
//     const element = <h1>{new Date().toLocaleTimeString()}</h1>;

//     ReactDOM.render(element, document.getElementById('root'));
// }, 1000);

// function Clock({ locale }) {
//     return <h1>{new Date().toLocaleTimeString(locale)}</h1>;
// }
// class Clock extends React.PureComponent {
//     render() {
//         const { locale, children } = this.props;
//         return (
//             <h1>
//                 {new Date().toLocaleTimeString(locale)} - {children}
//             </h1>
//         );
//     }
// }

// ReactDOM.render(<Clock locale="bn-bd">Testing children</Clock>, document.getElementById('root'));
// const states = [];
// let stateIndex = -1;

// function useState(defaultValue) {
//     // eslint-disable-next-line no-plusplus
//     const index = ++stateIndex;

//     // eslint-disable-next-line no-use-before-define
//     if (states[index]) return states[index];

//     const setValue = (newValue) => {
//         states[index][0] = newValue;
//         // eslint-disable-next-line no-use-before-define
//         renderAgain();
//     };

//     const returnArray = [defaultValue, setValue];
//     states[index] = returnArray;
//     return returnArray;
// }

// const App = () => {
//     const [todo, setTodo] = useState('');
//     const [warning, setWarning] = useState(null);

//     const handleInput = (e) => {
//         const inputValue = e.target.value;
//         let updatedWarning = '';
//         if (inputValue.includes('.js')) {
//             updatedWarning = 'Do you know JS?';
//         }
//         setTodo(inputValue);
//         setWarning(updatedWarning);
//     };

//     return (
//         <div>
//             <textarea name="todo" id="" cols="30" rows="10" onChange={handleInput} />
//             <h4>{warning || todo}</h4>
//         </div>
//     );
// };

function renderAgain() {
    // stateIndex = -1;
    ReactDOM.render(
        <>
            {/* <Clock /> */}
            <App />
        </>,
        document.getElementById('root')
    );
}

renderAgain();
