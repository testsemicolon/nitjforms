import React, { Component } from 'react'
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'department', headerName: 'Department', width: 170},
  { field: 'fundsallocated', headerName: 'Allocated Fund', width: 130 },
  { field: 'balance', headerName: 'Funds Left', width: 130 },
  
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
  { id: 1,department:'Computer Science',fundsallocated:12300,balance:10000},
  { id: 2,department:'Electronics',fundsallocated:12300,balance:10000},
  { id: 3,department:'Mechanical',fundsallocated:12300,balance:10000},
  { id: 4,department:'Chemistry',fundsallocated:12300,balance:10000},
  { id: 5,department:'Civil',fundsallocated:1240,balance:10000},
 
];

export default class FundsAllot extends Component {
    render() {
        return (
            <div >
                {/* <font style={{fontSize:"2.7vw",fontColor:"Black",alignContent:"center"}}> Outbox</font>
                <hr/> */}
                <div style={{backgroundColor:"white",borderRadius:".5vw",width:"40%",marginTop:"1vw",marginLeft:"1vw",display:"flex",justifyContent:"space-evenly",paddingTop:"1vw",paddingBottom:"1vw",marginBottom:"3vw"}}>
       
       <div style={{ height:400,flexBasis:"95%", boxShadow:
           ".05vw .05vw .7vw silver, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",
         MozBoxShadow:
           "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ", }}>
 <DataGrid rows={rows} columns={columns}  />
</div>
            </div>


            </div>
            

            
            
        )
    }
}
