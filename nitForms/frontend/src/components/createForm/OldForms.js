import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

// const Styles = makeStyles((theme) => ({
//   icon: {
//     marginRight: theme.spacing(2),
//   },
//   heroContent: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(8, 0, 6),
//   },
//   heroButtons: {
//     marginTop: theme.spacing(4),
//   },
//   cardGrid: {
//     paddingTop: theme.spacing(8),
//     paddingBottom: theme.spacing(8),
//   },
//   card: {
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//   },
//   cardMedia: {
//     paddingTop: "56.25%", // 16:9
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(6),
//   },
// }));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export class OldForms extends Component {
  static = {
    FormName: PropTypes.array.isRequired,
  };

  // const classes = Styles;
  render() {
    return (
      <div>
        <Fragment>
          <Container
            style={{
              paddingTop: "8rem",
              paddingBottom: "8rem",
            }}
            // maxWidth="md"
          >
            {/* End hero unit */}
            <Grid container spacing={4}>
              {this.props.FormName.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      style={{ paddingTop: "56.25%" }}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent style={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                      </Typography>
                      <Typography>{card.description}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  FormName: state.FormName.FormName,
});

export default connect(mapStateToProps)(OldForms);