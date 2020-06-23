import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NavigationBar from "../../shared/components/navigation-bar/navigationBar";
import {Grid,Typography,Button, Card, CardMedia, CardContent, CardActions, CardActionArea } from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles, useTheme } from "@material-ui/core/styles";
import history from '../../history'
import AssessmentIcon from '@material-ui/icons/Assessment';
import GroupAddTwoToneIcon from '@material-ui/icons/GroupAddTwoTone'
import BusinessTwoToneIcon from '@material-ui/icons/BusinessTwoTone';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@material-ui/core/MobileStepper';
import {ourFocusData,headLineContent} from "../../shared/resources/textData/TextData";
import {GetOurFocus, SetOurFocus} from "./HomeAction";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    padding:'0 15px'
  },
  highlight: {
    fontWeight: "bold"
  },
  h1BoldEbony:{
    ...theme.typography.h1BoldEbony,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  h1BoldWhite:{
    ...theme.typography.h1BoldWhite,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  h5MediumEbony:{
    ...theme.typography.h5MediumEbony,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    textAlign:'left'
  },
  h5MediumWhite:{
    ...theme.typography.h5MediumWhite,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  cardDimensions:{
    width:'300px',
    height:'350px',
    position:'relative',
    [theme.breakpoints.down('sm')]: {
      width: '250px',
      marginBottom:'5px',
      height:'360px',
      position:'relative'
    }
  },
  labelManatee:{
    ...theme.typography.labelManatee,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  cardActions:{
    position:'absolute',
    bottom:0
  },
  imageDimension:{
    width:'100%'
  },
  trackerBackground:{
    backgroundColor:theme.colors.oceanGreen,
    height:'350px',
    marginBottom:'20px'
  },
  headLine:{
    margin:'20px 0px'
  }
}));

function Home(props) {
  const {getOurFocus,ourFocus,setOurFocus}=props;
  const theme = useTheme();
  const classes = useStyles();
  let home=history.location.pathname;
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = headLineContent.length;
  const [open, setOpen] = React.useState(false);

  const handleOpen = (index) => {
    if(ourFocus.length>0){
      !open?setOpen(true):setOpen(false);
      ourFocus[index].readMore=!open;
      setOurFocus(ourFocus)
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  useEffect(() => {
    getOurFocus(ourFocusData)
  });

    return (
        <Grid container>
          <Grid item xs={12}>
            <NavigationBar homeIsActive={home.includes('home')}/>
          </Grid>
          <Grid container className={classes.root}>
            <Grid container className={classes.headLine}>
              <Grid item xs={12}>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                  {headLineContent.map((step, index) => (
                      <Grid container key={step.heading}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Grid container className={classes.headLine} spacing={2}>
                              <Grid item xs={12} md={6}>
                                <Grid container spacing={2}>
                                  <Grid item xs={12}>
                                    <Typography className={classes.h1BoldEbony} style={{textAlign:"left"}}>
                                      {step.heading}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Typography className={classes.h5MediumEbony}>
                                      {step.subHeading}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        component={Link}
                                        to= {step.buttonLabel==='Get Involved'?"/Volunteer":''}>
                                      {step.buttonLabel}
                                    </Button>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <img src={step.imagePath}
                                     className={classes.imageDimension}
                                     alt={'Volunteers'}/>
                              </Grid>
                            </Grid>
                        ) : null}
                      </Grid>
                  ))}
                </AutoPlaySwipeableViews>
              </Grid>
           <Grid item xs={12}>
             <MobileStepper
                 steps={maxSteps}
                 position="static"
                 variant="dots"
                 activeStep={activeStep}
                 nextButton={
                   <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                     Next
                     {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                   </Button>
                 }
                 backButton={
                   <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                     {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                     Back
                   </Button>
                 }/>
           </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.trackerBackground}>
              <Grid item xs={12}>
                  <Typography className={classes.h1BoldWhite}>
                    <AssessmentIcon color={"secondary"} fontSize={"large"} style={{position:'relative', top:'5px'}}/>
                    Cedal Tracker
                  </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography style={{textAlign:"center"}}>
                  <GroupAddTwoToneIcon style={{textAlign:"center"}} color={"secondary"} fontSize={"large"}/>
                </Typography>
                <Grid item xs={12}>
                  <Typography className={classes.h1BoldWhite}>8+</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.h5MediumWhite}>Number of volunteers</Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography style={{textAlign:"center"}}>
                  <BusinessTwoToneIcon style={{textAlign:"center"}} color={"secondary"} fontSize={"large"}/>
                </Typography>
                <Grid item xs={12}>
                  <Typography className={classes.h1BoldWhite}>2+</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.h5MediumWhite}>Number of organisations we have assisted</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justify={"space-around"} spacing={3}>
              <Grid item xs={12}>
                <Typography className={classes.h1BoldEbony}>
                  Our Focus
                </Typography>
              </Grid>
              {ourFocus.map((focus,index)=>
                <Grid item key={index}>
                  <Card className={classes.cardDimensions}>
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={focus.media}
                        title={focus.heading}
                    />
                    <CardContent>
                      <Typography className={classes.h5MediumEbony}>
                        {focus.heading}
                      </Typography>
                      <Typography className={classes.labelManatee}>
                        {!focus.readMore?focus.subHeading.substr(0,90).concat('. . .'):focus.subHeading}
                      </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardActions}>
                      <Button size="small" color="primary">
                        Donate
                      </Button>
                      <Button size="small"
                              color="primary"
                      onClick={()=>handleOpen(index)}>
                        Read {!focus.readMore?'More':'Less'}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
    );
}

Home.propTypes={
  ourFocus:PropTypes.array,
  getOurFocus:PropTypes.func,
  setOurFocus:PropTypes.func
};

const mapStateToProps = state => ({
  ourFocus: state.homePageDetails.ourFocus
});

export const mapDispatchToProps = (dispatch) => {
  return {
    getOurFocus: (ourFocus) => dispatch(GetOurFocus(ourFocus)),
    setOurFocus: (ourFocus) => dispatch(SetOurFocus(ourFocus)),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
