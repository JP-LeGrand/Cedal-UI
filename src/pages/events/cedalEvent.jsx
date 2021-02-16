import React from "react";
import PropTypes from "prop-types";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      marginBottom: "10px",
    },
    media: {
      height: 0,
      paddingTop: "56.25%",
    },
  })
);

export default function CedalEventCard(props) {
  const classes = useStyles();
  return (
    <Grid item>
      {props.cedalEvents.map((evt, key) => (
        <Card className={classes.root} key={key}>
          <CardHeader title={evt.name} subheader={evt.date} />
          <CardMedia
            className={classes.media}
            image="{evt.eventImage}"
            title={evt.name}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {evt.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Grid>
  );
}

CedalEventCard.propTypes = {
  cedalEvents: PropTypes.array,
};
