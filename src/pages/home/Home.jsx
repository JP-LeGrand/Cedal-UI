import React from "react";
import { connect } from "react-redux";
import NavigationBar from "../../shared/components/navigation-bar/navigationBar";
import Grid from "@material-ui/core/Grid";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <NavigationBar homeIsActive={true}/>
          </Grid>
          <Grid item xs={12}>
              This is the Home page
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  numberOfVolunteers: state.homePageDetails.numberOfVolunteers,
  numberOfOrganisationsAssisted:
    state.homePageDetails.numberOfOrganisationsAssisted
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
