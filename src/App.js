import React from "react";
import Routes from "../src/modules/shared/Routes";
import { Provider } from "react-redux";
import { createAppState } from "./modules/redux/AppState";
import { MuiThemeProvider } from "@material-ui/core/styles";
import * as Themes from "./shared/styles/themes/theme";
import { Router } from "react-router-dom";
import history from "./history";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateUtils from "@date-io/moment";

const muiTheme = Themes.getTheme();

function App() {
  return (
    <Provider store={createAppState()}>
      <MuiThemeProvider theme={muiTheme}>
        <MuiPickersUtilsProvider utils={DateUtils}>
          <Router history={history}>
            <Routes />
          </Router>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
