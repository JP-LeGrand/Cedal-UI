import React from "react";
import { connect } from "react-redux";
import NavigationBar from "../../shared/components/navigation-bar/navigationBar";
import {Grid,Typography,Button, Card, CardMedia, CardContent, CardActions, CardActionArea } from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import history from '../../history'
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
  h5MediumEbony:{
    ...theme.typography.h5MediumEbony,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    textAlign:'left'
  },
  cardDimensions:{
    width:'300px',
    height:'350px',
    [theme.breakpoints.down('sm')]: {
      width: '250px',
      marginBottom:'5px',
      height:'360px',
    }
  },
  labelManatee:{
    ...theme.typography.labelManatee,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
}));

const ourFocus=[{
    heading:'Academic support',
    subHeading:'Our tutors teach skills for academic success, including organization, time management, ' +
        'embed tutorials in the learning process and build strong student-teacher relationships.',
    media:'https://wagner-wpengine.netdna-ssl.com/cace/files/2019/02/RS56563_LEAD_Mentor_11-scr.jpg',
    link:''
  },
  {
    heading:'Training in good people skills',
    subHeading:' Good people skills also extend to include problem-solving abilities, ' +
        'empathy for others and a willingness to work together toward the common good.',
    media:'https://images.theconversation.com/files/193885/original/file-20171109-14167-17phj7s.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
    link:''
  },
  {
    heading:'Adolescent health awareness',
    subHeading: 'Most are healthy, but there is still substantial premature death, illness, and injury among adolescents.',
    media:'https://www.newsservice.org/getimage.php?p=c2dpZD02NjQxNiZzaWQ9MQ==',
    link:''
  },
  {
    heading:'Gender equality and women empowerment',
    subHeading:'Re-integration of girls and young women that were left  out of the education and economic system',
    media:'https://cdn.girlsleadership.org/app/uploads/2016/10/GettyImages-186366108.jpeg',
    link:''
  }]

function Home() {
  const classes = useStyles();
let home=history.location.pathname

    return (
        <Grid container>
          <Grid item xs={12}>
            <NavigationBar homeIsActive={home.includes('home')}/>
          </Grid>
          <Grid container>
          </Grid>
          <Grid container className={classes.root}>
              <Grid item xs={12}>
                <Typography>
                  Assist in our great mission of contributing to the human-centered development process
                  aimed at paying attention to the interests of vulnerable youth.
                </Typography>
              <Grid item xs={12}>
                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/Volunteer">
                  Get Involved
                </Button>
              </Grid>
            </Grid>
            <Grid container justify={"space-between"} spacing={3}>
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
                        {focus.subHeading}
                      </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Donate
                      </Button>
                      <Button size="small" color="primary">
                        Learn More
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

const mapStateToProps = state => ({
  numberOfVolunteers: state.homePageDetails.numberOfVolunteers,
  numberOfOrganisationsAssisted:
    state.homePageDetails.numberOfOrganisationsAssisted
});


export default connect(mapStateToProps)(Home);
