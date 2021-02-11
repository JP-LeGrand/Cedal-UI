import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import SubjectIcon from "@material-ui/icons/Subject";
import * as Colors from "../../../shared/styles/themes/colours";
import * as Validators from "../../../shared/helpers/Validators";
import { bindActionCreators } from "redux";
import * as NewsletterAction from "./NewsletterAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      padding: "0 15px",
    },
    newsLetterBackground: {
      backgroundColor: theme.colors.oceanGreen,
      padding: "16px",
    },
    h1BoldWhite: {
      ...theme.typography.h1BoldWhite,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      marginBottom: "20px",
    },
    h4MediumWhite: {
      ...theme.typography.h4MediumWhite,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      textAlign: "left",
    },
    textField: {
      width: "100%",
    },
    secondaryButton: {
      "&:hover": {
        color: Colors.white,
        backgroundColor: Colors.barberrysolid,
        borderColor: Colors.barberrysolid,
      },
    },
  })
);

function Newsletter(props) {
  const classes = useStyles();
  const [subscriber, setSubscriber] = React.useState({
    userEmail: "",
    userEmailError: false,
    userEmailErrorMessage: "",
    dateSubscribed: null,
  });

  const handleChange = (name) => (event) => {
    setSubscriber({
      [name]: event.target.value,
      [`${name}Error`]: false,
      [`${name}ErrorMessage`]: "",
    });
  };

  const validateEmail = () => {
    let userEmailError;
    let userEmailErrorMessage = "";
    let userEmail = subscriber?.userEmail;

    userEmailError =
      !userEmail?.trim() || !Validators.ValidateEmailAddress(userEmail);

    if (userEmailError) {
      userEmailErrorMessage = "Please enter valid email address";
    } else {
      userEmailErrorMessage = "";
    }

    const formValid = !userEmailError;

    setSubscriber({
      userEmail,
      userEmailError,
      userEmailErrorMessage,
    });

    if (formValid) {
      props.subscribe({
        userEmail: subscriber.userEmail,
        dateSubscribed: new Date(),
      });
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} className={classes.newsLetterBackground}>
        <Grid item xs={12}>
          <Typography className={classes.h1BoldWhite}>
            <SubjectIcon
              fontSize={"large"}
              style={{ position: "relative", top: "5px" }}
            />
            Newsletter
          </Typography>
        </Grid>
        <Grid container spacing={2} justify={"space-evenly"}>
          <Grid item xs={12} md={5}>
            <Typography className={classes.h4MediumWhite}>
              Keep in touch with our latest news and updates
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              label={"Email Address"}
              variant="outlined"
              className={classes.textField}
              type="email"
              color={"secondary"}
              size="small"
              error={subscriber.userEmailError}
              onChange={handleChange("userEmail")}
              value={subscriber.userEmail ?? ""}
              helperText={subscriber.userEmailErrorMessage}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              color={"secondary"}
              variant="outlined"
              className={classes.secondaryButton}
              onClick={validateEmail}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

Newsletter.propTypes = {
  subscribe: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    subscribe: bindActionCreators(NewsletterAction.Subscribe, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Newsletter);
