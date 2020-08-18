import React, { Component } from "react";
import MyEditor from "./MyEditor";
import MyEditorHTML from "./MyEditorHTML";
import DisplayEditor from "./DisplayEditor";
import Tabs from "react-bootstrap/Tabs";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Card from "@material-ui/core/Card";
import Popup from "reactjs-popup";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import store from "../../store";
import { createMessage } from "../../actions/Messages";

export class NotingIndividual extends Component {
  arr = [];
  obj = [];
  formname = {};
  constructor(props) {
    super(props);
    console.log(this.props);
    this.props.FormName.map((a) => {
      if (a.title === this.props.title) {
        this.formname = a;
        this.arr = a.notingLink;
      }
    });

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

  onClickGenerate = () => {
    store.dispatch(createMessage({ generateNoting: "Noitng Generated" }));
  };

  render() {
    return (
      <div
        style={{
          boxShadow: ".3vw .3vw .5vw silver",
          borderRadius: "1vw",
          margin: "1vw",
          backgroundColor: "#ffffff",
        }}
      >
        <Grid container spacing={4} style={{ margin: 0 }}>
          {this.obj.map((a) => (
            <Grid item key={a.id} xs={6} sm={6} md={6} lg={4}>
              <Card
                key={a.id}
                style={{
                  // height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: ".3vw .3vw .5vw silver",
                  border: ".01vw solid #009999",
                  margin: ".7vw",
                }}
              >
                <CardMedia
                  style={{ paddingTop: "56.25%" }}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent style={{ flexGrow: 1 }}>
                  <strong>
                    <h5 style={{ color: "#009999" }}>{a.name}</h5>
                  </strong>
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
                        size="small"
                        style={{
                          backgroundColor: "#66a3ff",
                          boxShadow: ".3vw .3vw .3vw grey",
                          marginLeft: "auto",
                          marginRight: "auto",
                          borderWidth: 0,
                        }}
                      >
                        View
                      </Button>
                    }
                    position="right center"
                  >
                    <div
                      style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        fontSize: "1vw",
                        textAlign: "center",
                      }}
                    >
                      <DisplayEditor
                        noting={a.noting}
                        key1={a.key}
                        title={this.props.title}
                        id={this.props.id}
                      />
                      <br />
                      <br />
                      <Button
                        style={{
                          // marginTop: "23vw",
                          backgroundColor: "#66a3ff",
                          boxShadow: ".1vw .1vw .1vw .1vw silver",
                          marginLeft: "auto",
                          marginRight: "auto",
                          borderWidth: 0,

                          alignSelf: "center",
                        }}
                        onClick={this.onClickGenerate}
                      >
                        GENERATE
                      </Button>
                    </div>
                  </Popup>
                  {/* </Link> */}
                  {/* <Link to={`/response/${card.title}`}> */}
                  {/* </Link> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* </Container>
          </Tab>
        </Tabs> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  NotingTemplate: state.NotingTemplate.NotingTemplate,
  FormName: state.FormName.FormName,
});

export default connect(mapStateToProps)(NotingIndividual);
