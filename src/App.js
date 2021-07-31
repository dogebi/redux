/* eslint-disable no-undef */
import "./App.css";

import Comments from "./components/Comments";
import Display from "./components/Display";
import { Provider } from "react-redux";
import Subscribers from "./components/Subscribers";
import Views from "./components/Views";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Comments />
        <Subscribers />
        <Views />
        <Display />
      </div>
    </Provider>
  );
}

export default App;
