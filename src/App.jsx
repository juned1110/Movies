import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import HomePage from "./component/HomePage";

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
