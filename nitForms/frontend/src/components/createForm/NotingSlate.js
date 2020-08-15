import React, { Component } from "react";
import MyEditor from "./MyEditor";
import MyEditorHTML from "./MyEditorHTML";
import DisplayEditor from "./DisplayEditor";
import Tabs from "react-bootstrap/Tabs";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Tab from "react-bootstrap/Tab";
import Card from "@material-ui/core/Card";
import Popup from "reactjs-popup";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Editor } from "draft-js";

export class NotingSlate extends Component {
  render() {
    return (
      <div
        style={{
          border: ".1vw solid lightgrey",
          margin: "1vw",
        }}
      >
        <Tabs
          style={{
            margin: "1vw",
          }}
          defaultActiveKey="New Template"
          id="uncontrolled-tab-example"
        >
          <Tab
            eventKey="Previous Templates"
            style={{ color: "blue" }}
            title="Previous Templates"
          >
            {/* {this.props.NotingTemplate.map((a) => (
              <div key={a.id}>
                <h3>{a.noting}</h3>
              </div>
            ))} */}
            <Container
              style={{
                margin: 0,
              }}
              // maxWidth="md"
            >
              <Grid container spacing={3} style={{ margin: 0 }}>
                {this.props.NotingTemplate.map((a) => (
                  <Grid item key={a.id} xs={5} sm={4} md={2}>
                    <Card
                      key={a.id}
                      style={{
                        // height: "100%",
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
                          {a.name}
                        </Typography>
                      </CardContent>
                      <CardActions style={{ margin: 0 }}>
                        {/* <Link to={`/${card.title}`}> */}
                        <Popup
                          contentStyle={{
                            width: "20%",
                            height: "65%",
                            border: ".1vw solid grey",
                          }}
                          modal
                          trigger={
                            <Button
                              style={{
                                marginRight: ".2vw",
                                backgroundColor: "#3f52b5",
                                boxShadow: ".1vw .1vw .1vw .1vw silver",
                                padding: ".17vw",
                                color: "white",
                              }}
                            >
                              View
                            </Button>
                          }
                          position="right center"
                        >
                          <div>
                            <DisplayEditor noting={a.noting} />
                          </div>
                        </Popup>

                        {/* </Link> */}
                        {/* <Link to={`/response/${card.title}`}> */}
                        <Button
                          style={{
                            backgroundColor: "white",
                            color: "#3f51b5",
                            border: " 0.06vw solid #3f51b5",
                            boxShadow: ".1vw .1vw .1vw .1vw silver",
                            padding: ".17vw",
                          }}
                        >
                          Use
                        </Button>
                        {/* </Link> */}
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Tab>
          <Tab eventKey="New Template" title="New Template">
            <div style={{ backgroundColor: "red", width: "73vw" }}>
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: ".5vw",
                  width: "49vw",
                  float: "left",
                  position: "relative",

                  boxShadow: ".4vw .4vw .1vw silver",
                  // marginBottom: "1vw",
                }}
              >
                {" "}
                <MyEditor />
              </div>
              <div
                style={{
                  backgroundColor: "transparent",
                  borderRadius: ".5vw",
                  width: "11vw",
                  minHeight: "40vw",
                  float: "right",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: ".5vw",
                    width: "30vw",
                    minHeight: "16vw",
                    boxShadow: ".4vw .4vw .1vw silver",
                    marginBottom: "1.5vw",
                  }}
                >
                  status
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: ".5vw",
                    width: "30vw",
                    minHeight: "16vw",
                    boxShadow: ".4vw .4vw .1vw silver",
                  }}
                >
                  cbjfvg
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  NotingTemplate: state.NotingTemplate.NotingTemplate,
});

export default connect(mapStateToProps)(NotingSlate);
