
///////////////////////////
//Dumindu
//////////////////////


import { Button, Paper, Table, Typography, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
//import { Button, Grid, Typography, Input } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const CustomerTable = ({rows, selectedTable, deleteTable}) =>
{
    return(
        <TableContainer component={Paper}>
            <Typography 
                component={'h1'} 
                sx={{
                color:'#000000', 
                fontSize: '3rem',
                fontWeight: 'bold',
                backgroundColor:'#e6c235',
                width: '100%',
               
                textAlign:"center",
                
                }}>Table List
                </Typography>
        <Table>
            <TableHead>
                <TableRow>
                        <TableCell sx={{ fontWeight: "bold", fontSize: 16 }}>Table No</TableCell>
                        <TableCell sx={{ fontWeight: "bold", fontSize: 16 }}>Used Date</TableCell>
                        <TableCell sx={{ fontWeight: "bold", fontSize: 16 }}>Used Time</TableCell>
                        <TableCell sx={{ fontWeight: "bold", fontSize: 16 }}>Person count</TableCell>
                        <TableCell sx={{ fontWeight: "bold", fontSize: 16 }}>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows.length > 0 ? rows.map(row => (
                        <TableRow key={row.table_no}>
                            <TableCell component={'th'} scope="row">{row.table_no}</TableCell>
                            <TableCell component={'th'} scope="row">{row.used_date}</TableCell>
                            <TableCell component={'th'} scope="row">{row.used_time}</TableCell>
                            <TableCell component={'th'} scope="row">{row.person_count}</TableCell>
                            <TableCell>
                                <Button sx={{
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
                                  }} onClick={() => selectedTable({table_no: row.table_no, used_date: row.used_date, used_time: row.used_time, person_count: row.person_count})}>
                                    Update
                                </Button>
                                <Button sx={{
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
                                  }} onClick={() => deleteTable({table_no: row.table_no})}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    )) : (
                        <TableRow>
                            <TableCell component={'th'} scope="row">No Data</TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    </TableContainer>
    );
}
export default CustomerTable;