import React from "react";

import { Provider } from "react-redux";
import store from "../store";

import SignIn from "../screens/signin/index";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <Provider store={store}>
      <SignIn />
    </Provider>
  );
}

export default App;
