import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './components/Router/About';
import Home from './components/Router/Home';
import Navbar from './components/Router/Navbar';
import Services from './components/Router/Services';
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
            {/* <ComplexCounter /> */}
            {/* <CounterThree /> */}
            {/* <ComponentA /> */}
            {/* <GetPost2 /> */}
            {/* <LayoutComponentB /> */}
            {/* <Logo /> */}
            {/* <FlexbBox2 /> */}
            {/* <Grid /> */}
            <Router>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/services" component={Services} />
            </Router>
        </div>
    );
}
export default App;
