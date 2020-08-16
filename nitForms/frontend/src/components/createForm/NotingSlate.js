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
                            width: "auto",
                            height: "auto",
                            border: ".1vw solid grey",
                          }}
                          modal
                          trigger={
                            <Button
                              style={{
                                marginRight: ".2vw",
                                backgroundColor: "orange",
                                boxShadow: ".3vw .3vw .3vw  grey",
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
                            color: "orange",
                            border: " 0.06vw solid orange",
                            boxShadow: ".3vw .3vw .3vw  grey",
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
            <MyEditor />
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
