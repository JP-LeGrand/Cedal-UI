import React from "react";
import Home from "../../pages/home/Home";
import GetInvolved from "../../pages/GetInvolved/GetInvolved";
import ApplicationForm from "../../pages/GetInvolved/ApplicationForm";
import EventsAndNews from "../../pages/events/events";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Volunteer" exact component={GetInvolved} />
        <Route path="/ApplicationForm" exact component={ApplicationForm} />
        <Route path="/EventsAndNews" exact component={EventsAndNews} />
      </Switch>
    );
  }
}
export default Routes;
