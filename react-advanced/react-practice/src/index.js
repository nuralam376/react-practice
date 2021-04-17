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

ReactDOM.render(
    <>
        {/* <Clock /> */}
        <App />
    </>,
    document.getElementById('root')
);
