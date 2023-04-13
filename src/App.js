import "./App.css";
import Counter from "./components/Counter";
import Theme from "./components/Theme";

import Status from "./components/Status";
import { createStore } from "./redux/custom-redux";
import Provider from "./redux/Provider";

function App() {
  const store = createStore();
  return (
    <div className='App'>
      <Provider store={store}>
        <Counter />
        <Theme />
        <Status />
      </Provider>
    </div>
  );
}

export default App;
