import React, { Component } from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "From", width: 130 },
  { field: "action", headerName: "Action", width: 130 },
  { field: "to", headerName: "To", width: 130 },
  { field: "date", headerName: "Date", width: 130 },
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.getValue('firstName') || ''} ${params.getValue('to') || ''}`,
  //   },
];

const rows = [
  {
    id: 1,
    to: "Snow",
    firstName: "Jon",
    action: "forward",
    date: "21-10-2020",
  },
  {
    id: 2,
    to: "Lannister",
    firstName: "Cersei",
    action: "reply",
    date: "21-10-2020",
  },
  {
    id: 3,
    to: "Lannister",
    firstName: "Jaime",
    action: "forward",
    date: "21-10-2020",
  },
  {
    id: 4,
    to: "Stark",
    firstName: "Arya",
    action: "forward",
    date: "21-10-2020",
  },
  {
    id: 5,
    to: "Targaryen",
    firstName: "Daenerys",
    action: null,
    date: "21-10-2020",
  },
  {
    id: 6,
    to: "Melisandre",
    firstName: null,
    action: "forward",
    date: "21-10-2020",
  },
  {
    id: 7,
    to: "Clifford",
    firstName: "Ferrara",
    action: "forward",
    date: "21-10-2020",
  },
  {
    id: 8,
    to: "Frances",
    firstName: "Rossini",
    action: null,
    date: "21-10-2020",
  },
  { id: 9, to: "Roxie", firstName: "Harvey", action: null, date: "21-10-2020" },
];

export default class Outbox extends Component {
  render() {
    return (
      <div style={{ alignContent: "center", textAlign: "center" }}>
        <font
          style={{
            fontSize: "2.7vw",
            fontColor: "Black",
            alignContent: "center",
          }}
        >
          {" "}
          Outbox
        </font>
        <hr />
        <div
          style={{
            backgroundColor: "white",
            borderRadius: ".5vw",
            display: "flex",
            justifyContent: "space-evenly",
            paddingTop: "1vw",
            paddingBottom: "1vw",
            marginBottom: "3vw",
          }}
        >
          <div
            style={{
              height: 600,
              flexBasis: "97%",
              boxShadow:
                ".05vw .05vw .7vw silver, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              pactionSize={10}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    );
  }
}
