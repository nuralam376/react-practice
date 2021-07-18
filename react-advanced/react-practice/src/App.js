import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/Router/About';
import Error from './components/Router/Error';
import Home from './components/Router/Home';
import Navbar from './components/Router/Navbar';
import Posts from './components/Router/Posts';
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
    const isAuthenticated = true;

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
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" render={() => <About />} />
                    <Route exact path="/services">
                        <Services number="2" />
                    </Route>
                    <Route exact path="/posts/:id">
                        {isAuthenticated ? <Posts /> : <Redirect to="/home" />}
                    </Route>

                    <Route component={Error} />
                </Switch>
            </Router>
        </div>
    );
}
export default App;
