import React, { Component } from "react";
import DownloadLink from "react-download-link";
import { Button } from "react-bootstrap";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic/build/ckeditor";

export default class NotingTemplatePayement extends Component {
  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>
          Payement Noting Template Generation
        </h3>
        <hr />
        <form onSubmit={this.onSubmit}>
          <CKEditor
            editor={ClassicEditor}
            data="<p><strong>Sub: Reimbursement of Expenditure &ndash; regarding</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p>The proposal deals with the reimbursement of expenditure incurred for Characterization of Samples by Ms. Parneet Kaur &ndash; Ph.D. Scholar &ndash; 15511002, dept. of Biotechnology under TEQIP-III. Approval of the worthy Director <strong><em>Rs. 20,000/-</em></strong> (is available at F/ &ldquo;A&rdquo;).</p>
            <p>&nbsp;</p>
            <p>Now, Ms. Parneet Kaur &ndash; Ph.D. Scholar &ndash; 15511002, dept. of Biotechnology has submitted the claim for reimbursement of bills (PUC) of expenditure incurred for bills, as per detail tabulated below:</p>
            <table width=0>
            <tbody>
            <tr>
            <td width=133>
            <p><strong>Bill No</strong></p>
            </td>
            <td width=126>
            <p><strong>Dated</strong></p>
            </td>
            <td width=204>
            <p><strong>Particulars</strong></p>
            </td>
            <td width=70>
            <p><strong>Amount</strong></p>
            </td>
            </tr>
            <tr>
            <td width=133>
            <p>1620</p>
            </td>
            <td width=126>
            <p>04.02.2020</p>
            </td>
            <td width=204>
            <p>CD SPECTROSCOPY</p>
            </td>
            <td width=70>
            <p>826.00</p>
            </td>
            </tr>
            <tr>
            <td width=133>
            <p>20350</p>
            </td>
            <td width=126>
            <p>01.02.2020</p>
            </td>
            <td width=204>
            <p>GAS CHROMATOGRAPHY</p>
            </td>
            <td width=70>
            <p>1062.00</p>
            </td>
            </tr>
            <tr>
            <td width=133>
            <p>2986</p>
            </td>
            <td width=126>
            <p>27.01.2020</p>
            </td>
            <td width=204>
            <p>RAMAN SPECTROSCOPY</p>
            </td>
            <td width=70>
            <p>3186.00</p>
            </td>
            </tr>
            <tr>
            <td width=133>
            <p>IITBINT192002526</p>
            </td>
            <td width=126>
            <p>17.02.2020</p>
            </td>
            <td width=204>
            <p>ELEMENTAL ANALYSES</p>
            </td>
            <td width=70>
            <p>1770.00</p>
            </td>
            </tr>
            <tr>
            <td colspan=3 width=463>
            <p>Total</p>
            </td>
            <td width=70>
            <p>6844.00</p>
            </td>
            </tr>
            </tbody>
            </table>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>All the formalities are completed now. Therefore, the file is sent to the Account Section of the Institute for pre-audit of the bills and processing of payment voucher from TEQIP-III funds under head Academic Sub Head &ldquo;Research and Development&rdquo;.</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>Assistant Registrar (A&amp;A)</strong></p>
            <p><strong><br /> </strong></p>
            <p><strong>&nbsp;</strong></p>"
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
            <Button
              variant="outline-success"
              type="submit"
              style={{ fontFamily: "Times New Roman" }}
            >
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
    );
  }
}
