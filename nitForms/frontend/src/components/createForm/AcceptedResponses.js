import React, { Component, Fragment } from "react";
import AutoComplete from "./AutoComplete";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic/build/ckeditor";
import { connect } from "react-redux";
import { getAccepted } from "../../actions/AcceptedResponse";
import { Table } from "react-bootstrap";
import DownloadLink from "react-download-link";
import { Button } from "react-bootstrap";

export class AcceptedResponses extends Component {
  state = {
    content: "",
  };
  created_by2 = "";
  constructor(props) {
    super(props);
    this.props.getAccepted(this.props.match.params.title);

    {
      this.props.FormName.map((a) => {
        this.created_by2 = a.created_by;
      });
    }
    console.log(this.created_by2, this.props.created_by1);
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.content);
  };

  render() {
    if (this.created_by2 === this.props.created_by1) {
      return (
        <Fragment>
          <div
            style={{
              position: "relative",
              float: "left",
              width: "35vw",
            }}
          >
            <h3 style={{ textAlign: "center" }}>Noting Template Generation</h3>
            <hr />
            <form onSubmit={this.onSubmit}>
              <CKEditor
                editor={ClassicEditor}
                data="<p><strong>Subject:&nbsp; Administrative Approval for Purchase&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TEQIP-III funds&nbsp;&nbsp;&nbsp; </strong></p>
                <table width=0>
                <tbody>
                <tr>
                <td width=56>
                <p>1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</p>
                </td>
                <td width=216>
                <p>Name of the Indentor/Principal Investigator</p>
                </td>
                <td width=19>
                <p>:</p>
                </td>
                <td width=312>
                <p>Dr. Kuldeep Singh Nagla</p>
                </td>
                </tr>
                <tr>
                <td width=56>
                <p>2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</p>
                </td>
                <td width=216>
                <p>Name of the Equipment/Material to be Purchased, Qty. &amp; Specifications</p>
                </td>
                <td width=19>
                <p>:</p>
                </td>
                <td width=312>
                <p>Design and fabrication of Mobile Robot &ndash; 01 for COVID-19</p>
                </td>
                </tr>
                <tr>
                <td width=56>
                <p>3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</p>
                </td>
                <td width=216>
                <p>Department / Lab / Office</p>
                </td>
                <td width=19>
                <p>:</p>
                </td>
                <td width=312>
                <p>ICE (Instrumental and Control Engineering)</p>
                </td>
                </tr>
                <tr>
                <td width=56>
                <p>4.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</p>
                </td>
                <td width=216>
                <p>Total Amount involved in Purchase</p>
                </td>
                <td width=19>
                <p>:</p>
                </td>
                <td width=312>
                <p>Rs. 2,40,000/- approx.</p>
                </td>
                </tr>
                <tr>
                <td width=56>
                <p>5.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</p>
                </td>
                <td width=216>
                <p>Availability of Funds</p>
                </td>
                <td width=19>
                <p>:</p>
                </td>
                <td width=312>
                <p>To be allocated by NPIU against supply order.</p>
                </td>
                </tr>
                <tr>
                <td width=56>
                <p>6.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</p>
                </td>
                <td width=216>
                <p>Head to which Expenditure Debitable</p>
                </td>
                <td width=19>
                <p>:</p>
                </td>
                <td width=312>
                <p>Under head Academic sub-head &ldquo;Research &amp; Development&rdquo;</p>
                </td>
                </tr>
                <tr>
                <td width=56>
                <p>7.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; De</p>
                </td>
                <td width=216>
                <p>Detail of Specification</p>
                </td>
                <td width=19>
                <p>:</p>
                </td>
                <td width=312>
                <p>Annexure-A</p>
                </td>
                </tr>
                <tr>
                <td width=56>
                <p>8.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</p>
                </td>
                <td width=216>
                <p>Justification</p>
                </td>
                <td width=19>
                <p>:</p>
                </td>
                <td width=312>
                <p>Required for COVID-19 Project titled &ldquo;Design and Development of Service robot for hospitals&rdquo;</p>
                </td>
                </tr>
                <tr>
                <td width=56>
                <p>9.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</p>
                </td>
                <td width=216>
                <p>Mode of Procurement</p>
                </td>
                <td width=19>
                <p>:</p>
                </td>
                <td width=312>
                <p>Unser GFR 155, to allow Quotation from Outside Jalandhar as there is no any specialized Manufacturer/vender in Jalandhar (Through e-mail)&nbsp;</p>
                </td>
                </tr>
                <tr>
                <td width=56>
                <p>10.&nbsp;&nbsp; &nbsp;</p>
                </td>
                <td width=216>
                <p>Opening Committee</p>
                </td>
                <td width=19>
                <p>:</p>
                </td>
                <td width=312>
                <p>Purchase committee consisting of the following members:</p>
                <p>1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Head Department of ICE</p>
                <p>2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Principal Investigator</p>
                <p>3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dr. O P Verma, Assistant Professor, ICE</p>
                </td>
                </tr>
                <tr>
                <td width=56>
                <p>11.&nbsp;&nbsp; &nbsp;</p>
                </td>
                <td colspan=3 width=547>
                <p>Special Remarks:&nbsp; Items are Not Available on GeM Portal. May allow to invite Quotation from Outside Jalandhar (Through e-mail) as there is no any specialized Manufacturer/vendor in Jalandhar as intimated by the indentor (placed at Annexure - B). As the same is urgently required to provided services in hospitals for COVID-19 patients.</p>
                <p>&nbsp;</p>
                </td>
                </tr>
                </tbody>
                </table>
                <p>Hence, Director may kindly accord the administrative approval as a special case of Design and fabrication of Mobile Robot for COVID-19</p>
                <p><strong>&nbsp;</strong></p>
                <p><strong>Nodal Officer (Procurement)</strong></p>
                <p><strong>&nbsp;</strong></p>
                <p><strong>Coordinator TEQIP-III</strong></p>
                <p><strong><br /> </strong></p>"
                onInit={(editor) => {
                  const data = editor.getData();
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  this.setState({
                    content: data,
                  });
                }}
              />
              <div
                style={{
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "2vw",
                }}
              >
                <Button variant="outline-success" type="submit">
                  <DownloadLink
                    style={{ font: "white" }}
                    label="SUBMIT AND DOWNLOAD"
                    filename="myfile.html"
                    exportFile={() => this.state.content}
                  />
                </Button>
              </div>
            </form>
          </div>
          <div
            style={{
              position: "relative",
              float: "right",
              width: "35vw",
            }}
          >
            <h3 style={{ textAlign: "center" }}>Accepted Responses</h3>
            <hr />
            <Table striped bordered hover responsive id={this.props.title}>
              {/* <thead>
          {Object.keys(this.props.Forms).map((quest) => console.log(quest))};
          
        </thead> */}
              <tbody>
                {Object.entries(this.props.AcceptedResponse).map(
                  ([key, value]) => {
                    return (
                      <Fragment key={key}>
                        <tr>
                          {Object.entries(value).map(([question, answer]) => {
                            return (
                              <Fragment key={question}>
                                <td
                                  style={{
                                    alignContent: "center",
                                    alignItems: "center",
                                    textAlign: "center",
                                  }}
                                >
                                  <strong>{question.toUpperCase()}</strong>
                                  <br />
                                  {answer}
                                </td>
                              </Fragment>
                            );
                          })}
                        </tr>
                      </Fragment>
                    );
                  }
                )}
              </tbody>
            </Table>
          </div>
        </Fragment>
      );
    } else {
      return (
        <div>
          <hr />
          <h4 style={{ textAlign: "center" }}>
            Not authorized to view responses!
          </h4>
          <hr />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  AcceptedResponse: state.AcceptedResponse.AcceptedResponse,
  FormName: state.FormName.FormName,
  created_by1: state.Auth.user.username,
});

export default connect(mapStateToProps, { getAccepted })(AcceptedResponses);
