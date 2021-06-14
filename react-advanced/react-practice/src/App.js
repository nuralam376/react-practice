import './App.css';
import ClickedCounter from './components/HOC/ClickCounter';
import HoverCounter from './components/HOC/HoverCounter';

function App() {
    return (
        <div className="App">
            <ClickedCounter />
            <HoverCounter />
        </div>
    );
}

export default App;
