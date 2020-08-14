import React, { Component, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Header from "../layout/Header";
import { Link as Link1 } from "react-router-dom";
import OldForms from "./OldForms";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default class Album extends Component {
  render() {
    // const classes = useStyles();

    return (
      <Fragment>
        <Header />
        <div>
          <div style={{ width: "20vw", backgroundColor: "pink" }}>
            abcdckfhvgf
          </div>
          <div style={{ width: "20vw", backgroundColor: "pink" }}>
            abcdckfhvgf
          </div>
        </div>
        {/* Hero unit */}
        <div>
          {/* <Container maxWidth="sm"> */}
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            FORMS
          </Typography>

          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            LET'S CREATE A NEW FORM
          </Typography>
          <div>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Link1 to="/definingsteps">
                  <Button variant="contained" color="primary">
                    CREATE A NEW FORM
                  </Button>
                </Link1>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  VIEW PREVIOUS FORMS
                </Button>
              </Grid>
            </Grid>
          </div>
          {/* </Container> */}
        </div>

        <OldForms />

        {/* Footer */}
        <footer>
          <Typography variant="h6" align="center" gutterBottom>
            {" "}
            National Institute of Technology
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Jalandharr
          </Typography>
        </footer>
        {/* End footer */}
      </Fragment>
    );
  }
}
