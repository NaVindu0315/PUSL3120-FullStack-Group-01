
///////////////////////////
//Navindu
//////////////////////


import { Paper, TableCell, TableContainer, TableHead, TableRow , TableBody, Table,Button} from "@mui/material";
import React, { useEffect, useState } from "react";
//import { Button, Grid, Typography, Input } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const EmployeeTable = ({rows, selectedEmp}) =>
{
    return(
        <TableContainer 
                component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    ID
                                </TableCell>
                                <TableCell>
                                    Name
                                </TableCell>
                                <TableCell>
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                    {
                        rows.length > 0 ?  rows.map((row) => 
                            (
                            <TableRow key={row.id} sx ={{'&:last-child td,&:last-child th':{border:0}}}>
                            <TableCell component='th' scope="row">{row.id}</TableCell>
                            <TableCell component='th' scope="row">{row.name}</TableCell>
                             <TableCell>
                                <Button sx={{margin:'0px 10px'}}
                                onClick={
                                () => {
                            selectedEmp({
                                        id: row.id,
                                        name : row.name
                                    })
                            }
                                    
                                }
                                
                                >
                                Update
                                </Button>
                                <Button sx={{margin:'0px 10px'}}
                                onClick={
                                    () =>
                                    {/**  {
                                        deleteUser({id:row.id})

                                    } */}
                                  
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