import React from "react";
import { connect } from "react-redux";
import NavigationBar from "../../shared/components/navigation-bar/navigationBar";
import Grid from "@material-ui/core/Grid";
import { bindActionCreators } from "redux";
import * as eventsActions from "./EventsActions";
import PropTypes from "prop-types";
import CedalEventCard from "./CedalEvent";

class EventsAndNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cedalEvents: this.props.eventDetails.cedalEvents
    };
  }
  async UNSAFE_componentWillMount() {
    await this.props.getEventsActions();
  }

  //This will check if the array is empty
  componentDidUpdate() {
    if (!this.state.cedalEvents) {
      this.setState({ cedalEvents: this.props.eventDetails.cedalEvents });
    }
  }

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <NavigationBar eventsAndNewsIsActive={true} />
          </Grid>
          <Grid container item xs={12}>
            <CedalEventCard cedalEvents={this.state.cedalEvents} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

EventsAndNews.propTypes = {
  cedalEvents: PropTypes.array
};

const mapStateToProps = state => ({
  eventDetails: state.eventDetails,
  cedalEvents: state.eventDetails.cedalEvents,
});

const mapDispatchToProps = dispatch => ({
  getEventsActions: bindActionCreators(eventsActions.getEvents, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsAndNews);
