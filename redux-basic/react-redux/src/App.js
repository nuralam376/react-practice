import { Provider } from "react-redux";
import "./App.css";
import BiscuitContainer from "./components/BiscuitContainer";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <BiscuitContainer />
      </div>
    </Provider>
  );
}

export default App;
