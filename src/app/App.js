import React from "react";
import "semantic-ui-css/semantic.min.css";

import { Provider } from "react-redux";
import store from "../store";

import SignIn from "../screens/signin/index";

function App() {
  return (
    <Provider store={store}>
      <SignIn />
    </Provider>
  );
}

export default App;
