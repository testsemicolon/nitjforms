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

export class NotingIndividual extends Component {
  arr = [];
  obj = [];
  constructor(props) {
    super(props);

    this.props.FormName.map((a) => {
      if (a.title === this.props.title) {
        this.arr = a.notingLink;
        console.log("Asd");
      }
    });
    console.log(this.arr);
    this.props.NotingTemplate.map((b) => {
      this.arr.map((a) => {
        if (a === b.key) {
          this.obj.push(b);
        }
      });
    });
    this.obj.map((a) => {
      console.log(a);
    });
  }

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
            <h1>hello</h1>
            <Container
              style={{
                margin: 0,
              }}
              // maxWidth="md"
            >
              <Grid container spacing={4} style={{ margin: 0 }}>
                {this.obj.map((a) => (
                  <Grid item key={a.id} xs={5} sm={4} md={2}>
                    <Card
                      key={a.id}
                      style={{
                        // height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        margin: 0,
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
                            <Button size="small" color="primary">
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
                        <Button size="small" color="primary">
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
        </Tabs>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  NotingTemplate: state.NotingTemplate.NotingTemplate,
  FormName: state.FormName.FormName,
});

export default connect(mapStateToProps)(NotingIndividual);
