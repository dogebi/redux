/* eslint-disable no-undef */
import "./App.css";

import Display from "./components/Display";
import { Provider } from "react-redux";
import Subscribers from "./components/Subscribers";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Subscribers />
        <Display />
      </div>
    </Provider>
  );
}

export default App;
