import React, { Component } from "react";
import { Provider } from "react-redux";
import { Provider as CroodsProvider } from "croods";

import store from "./store/store";
import List from "./Todo/List";
import Create from "./Todo/Create";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CroodsProvider baseUrl="https://todo-backend-sinatra.herokuapp.com">
          <List />
          <Create />
        </CroodsProvider>
      </Provider>
    );
  }
}

export default App;
