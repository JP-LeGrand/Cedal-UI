import React  from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from '@material-ui/core/Button';
import NavigationBar from "../components/navigation-bar/Navigation_Bar"
class Home extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    numberOfVolunteers: state.HomePageDetails.numberOfVolunteers,
    numberOfOrganisationsAssisted: state.HomePageDetails.numberOfOrganisationsAssisted
});

const mapDispatchToProps = dispatch => ({
    
});

export default
 connect(
  mapStateToProps,
  mapDispatchToProps
)
(Home);
