import React from "react";
import Routes from "../src/modules/shared/Routes";
import { Provider } from "react-redux";
import { createAppState } from "../src/modules/redux/AppState";
function App() {
  return (
    <Provider store={createAppState()}>
      <Routes />
    </Provider>
  );
}

export default App;
