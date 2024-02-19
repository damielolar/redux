import React from "react";
import { Provider } from "react-redux";
import store from "./component/store";
import Addtask from "./component/AddTask";
import ListTask from './component/LIstTask';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Provider store={store}>
        <Addtask />
        <ListTask />
    </Provider>
    </div>
  );
}

export default App;