
///////////////////////////
//Navindu
//////////////////////


import { Paper, TableCell, TableContainer, TableHead, TableRow , TableBody, Table,Button,Typography} from "@mui/material";
import React, { useEffect, useState } from "react";
//import { Button, Grid, Typography, Input } from "@mui/material";
import { useNavigate } from 'react-router-dom';
//import './empstyle.css';

const EmployeeTable = ({rows, selectedEmp, deleteEmp,}) =>
{
    return(
        <TableContainer 
                component={Paper}>
                         <Typography component="h1" sx={{ color: "#000000", fontWeight: "bold", fontFamily: "Roboto, sans-serif" ,fontSize:"40px"}}>
  Employee Details
</Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                            <TableCell sx={{ fontWeight: "bold", fontSize: 16 }}>
  Employee code
</TableCell>
<TableCell sx={{ fontWeight: "bold", fontSize: 16 }}>
  Name
</TableCell>
<TableCell sx={{ fontWeight: "bold", fontSize: 16 }}>
  Birthday
</TableCell>
<TableCell sx={{ fontWeight: "bold", fontSize: 16 }}>
  Nic
</TableCell>
<TableCell sx={{ fontWeight: "bold", fontSize: 16 }}>
  Address
</TableCell>
<TableCell sx={{ fontWeight: "bold", fontSize: 16 }}>
  Telephone
</TableCell>
<TableCell sx={{ fontWeight: "bold", fontSize: 16 }}>
  Civil
</TableCell>
<TableCell sx={{ fontWeight: "bold", fontSize: 16 }}>
  Actions
</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                    {
                        rows.length > 0 ?  rows.map((row) => 
                            (
                            <TableRow key={row.id} sx ={{'&:last-child td,&:last-child th':{border:0}}}>
                            <TableCell component='th' scope="row">{row.emp_code}</TableCell>
                            <TableCell component='th' scope="row">{row.emp_name}</TableCell>
                            <TableCell component='th' scope="row">{row.bdate}</TableCell>
                            <TableCell component='th' scope="row">{row.nic}</TableCell>
                            <TableCell component='th' scope="row">{row.adrs}</TableCell>
                            <TableCell component='th' scope="row">{row.tel}</TableCell>
                            <TableCell component='th' scope="row">{row.civil}</TableCell>
                            
                             <TableCell>
                                <Button 
                                  sx={{
                                    margin: "auto",
                                    marginBottom: "20px",
                                    backgroundColor: "black",  /* Set background color to black */
                                    color: "white",            /* Set text color to white */
                                    marginLeft: "15px",
                                    marginTop: "20px",
                                    "&:hover": {
                                      opacity: 0.7,
                                      backgroundColor: "black",  /* Maintain black background on hover */
                                    },
                                  }}
                                className="action-btn"
                                onClick={
                                () => {

                            selectedEmp({
                                        emp_code: row.emp_code,
                                        emp_name : row.emp_name,
                                        bdate : row.bdate,
                                        nic : row.nic,
                                        adrs :row.adrs,
                                        tel :row.tel,
                                        civil :row.civil,
                                    })
                            }
                                    
                                }
                                
                                >
                                Update
                                </Button>
                                <Button 
                                  sx={{
                                    margin: "auto",
                                    marginBottom: "20px",
                                    backgroundColor: "black",  /* Set background color to black */
                                    color: "white",            /* Set text color to white */
                                    marginLeft: "15px",
                                    marginTop: "20px",
                                    "&:hover": {
                                      opacity: 0.7,
                                      backgroundColor: "black",  /* Maintain black background on hover */
                                    },
                                  }}
                                className="action-btn"
                                onClick={
                                    () =>
                                    {  {
                                        deleteEmp({emp_code:row.emp_code})

                                    } }
                                  
                                }
                                
                                >
                                delete
                                </Button>
                             </TableCell>
                            </TableRow>
                               
                            )
                            ):
                            (
                                <TableRow sx ={{'&:last-child td,&:last-child th':{border:0}}}>

                            <TableCell component='th' scope="row">No Data</TableCell> 
                                </TableRow>

                            )

                    }


                </TableBody>
                     
                    </Table>
        
        </TableContainer>
            );
}
export default EmployeeTable;