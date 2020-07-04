import React from "react";
import { connect } from "react-redux";
import NavigationBar from "../../shared/components/navigation-bar/navigationBar";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import CedalEventCard from "./cedalEvent";

class EventsAndNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cedalEvents: this.props.eventDetails.cedalEvents
    };
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

export default connect(mapStateToProps)(EventsAndNews);
