import './App.css';
import ClickedCounter from './components/Render/ClickCounter';
import Counter from './components/Render/Counter';
import HoverCounter from './components/Render/HoverCounter';

function App() {
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
            <Counter>
                {(count, incrementCount) => (
                    <HoverCounter count={count} incrementCount={incrementCount} />
                )}
            </Counter>
        </div>
    );
}

export default App;
