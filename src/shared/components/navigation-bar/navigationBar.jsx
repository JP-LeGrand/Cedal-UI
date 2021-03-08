import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { Link, Button, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import * as Images from "../../resources/Images/Images";
import history from "../../../history";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import * as TextData from "../../resources/textData/TextData";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  highlight: {
    fontWeight: "bold",
  },
  title: {
    flexGrow: 1,
    color: "#fff",
  },
  logo: {
    width: "150px",
    height: "150px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  donateButton: {
    position: "relative",
    marginLeft: 0,
    width: "100% !important",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default function MenuAppBar(props) {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);

  const list = () => (
    <div role="presentation">
      <List>
        {TextData.links.map((link, index) => (
          <ListItem button key={index}>
            <ListItemText
              primary={link.name}
              onClick={() => history.push(link.path)}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Grid container className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon onClick={() => setIsOpen(true)} />
          </IconButton>
          <Link onClick={() => history.push("/")}>
            <img
              src={Images.CedalLogo}
              alt="Cedal Logo"
              className={classes.logo}
            />
          </Link>
          <Button
            component={Link}
            onClick={() => history.push("")}
            color="inherit"
            className={classes.donateButton}
          >
            <Typography
              id="donate"
              className={props.donateIsActive ? classes.highlight : ""}
              color="secondary"
            >
              Donate
            </Typography>
          </Button>
        </Toolbar>
        <Drawer anchor="left" open={isOpen} onClose={() => handleClose()}>
          {list()}
        </Drawer>
      </AppBar>
    </Grid>
  );
}

MenuAppBar.propTypes = {
  donateIsActive: PropTypes.bool,
  eventsAndNewsIsActive: PropTypes.bool,
  getInvolvedIsActive: PropTypes.bool,
  ourWorkIsActive: PropTypes.bool,
};
