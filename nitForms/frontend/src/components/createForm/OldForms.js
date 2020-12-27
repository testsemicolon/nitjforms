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

  render() {
    return (
      <div>
        <Fragment>
          <div
            style={{
              marginTop: "1.3vw",
              backgroundColor: "white",
              padding: "3vw",
            }}
          >
            <Grid container spacing={4}>
              {this.props.FormName.map((card) => {
                if (
                  card.department == this.props.Department ||
                  card.department == "Purchase"
                ) {
                  return (
                    <Grid item key={card.id} xs={12} sm={6} md={3}>
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
                          image="static/form.jpg"
                          title="Image title"
                        />
                        <CardContent style={{ flexGrow: 1 }}>
                          <Typography
                            style={{ fontFamily: "Times New Roman" }}
                            gutterBottom
                            variant="h5"
                            component="h2"
                          >
                            {card.title}
                          </Typography>
                          <Typography style={{ fontFamily: "Times New Roman" }}>
                            {" "}
                            {card.description}
                          </Typography>
                        </CardContent>
                        <CardActions
                          style={{
                            textAlign: "center",
                            alignContent: "center",
                            alignItems: "center",
                            alignSelf: "center",
                          }}
                        >
                          <div>
                            <Link to={`/${card.title}`}>
                              <Button
                                style={{
                                  backgroundColor: "#e0777d",
                                  color: "white",
                                  border: 0,
                                  marginRight: "1vw",
                                  fontFamily: "Times New Roman",

                                  boxShadow: ".3vw .3vw .3vw lightgray",
                                }}
                                size="small"
                                color="primary"
                              >
                                View
                              </Button>
                            </Link>
                            <Link to={`/response/${card.title}`}>
                              <Button
                                style={{
                                  backgroundColor: "white",
                                  color: "#e0777d",
                                  border: "0.01vw solid #e0777d",
                                  boxShadow: ".3vw .3vw .3vw lightgray",
                                  fontFamily: "Times New Roman",
                                }}
                                size="small"
                                color="primary"
                              >
                                Responses
                              </Button>
                            </Link>
                          </div>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                }
              })}
            </Grid>
          </div>
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  FormName: state.FormName.FormName,
  Department: state.Auth.user.department,
});

export default connect(mapStateToProps, { getName, getSharedUser })(OldForms);
