import React from "react";
import Home from "../../pages/home/Home";
import GetInvolved from "../../pages/getInvolved/GetInvolved";
import ApplicationForm from "../../pages/getInvolved/ApplicationForm";
import EventsAndNews from "../../pages/events/Events";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Switch>
          <Route path="/Volunteer" exact component={GetInvolved} />
        </Switch>
        <Switch>
          <Route path="/ApplicationForm" exact component={ApplicationForm} />
        </Switch>
        <Switch>
          <Route path="/Events-And-News" exact component={EventsAndNews} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Routes;
