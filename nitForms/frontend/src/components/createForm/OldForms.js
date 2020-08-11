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
import { getName } from "../../actions/FormName";
import { Link } from "react-router-dom";
import { getSharedUser } from "../../actions/common";

export class OldForms extends Component {
  constructor(props) {
    super(props);
    this.props.getName();
    this.props.getSharedUser();
  }

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
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                  <Card
                    key={card.id}
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
                      <Link to={`/${card.title}`}>
                        <Button size="small" color="primary">
                          View
                        </Button>
                      </Link>
                      <Link to={`/response/${card.title}`}>
                        <Button size="small" color="primary">
                          Responses
                        </Button>
                      </Link>
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

export default connect(mapStateToProps, { getName, getSharedUser })(OldForms);
