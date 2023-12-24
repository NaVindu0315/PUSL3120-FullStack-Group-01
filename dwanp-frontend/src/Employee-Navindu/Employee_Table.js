
///////////////////////////
//Navindu
//////////////////////


import { Paper, TableCell, TableContainer, TableHead, TableRow , TableBody, Table,Button} from "@mui/material";
import React, { useEffect, useState } from "react";
//import { Button, Grid, Typography, Input } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const EmployeeTable = ({rows, selectedEmp, deleteEmp}) =>
{
    return(
        <TableContainer 
                component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Employee code
                                </TableCell>
                                <TableCell>
                                    Name
                                </TableCell>
                                <TableCell>
                                    Birthday 
                                </TableCell>
                                <TableCell>
                                    Nic
                                </TableCell>
                                <TableCell>
                                    Address
                                </TableCell>
                                <TableCell>
                                    Telephone
                                </TableCell>
                                <TableCell>
                                    Civil
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
                            <TableCell component='th' scope="row">{row.emp_code}</TableCell>
                            <TableCell component='th' scope="row">{row.emp_name}</TableCell>
                            <TableCell component='th' scope="row">{row.bdate}</TableCell>
                            <TableCell component='th' scope="row">{row.nic}</TableCell>
                            <TableCell component='th' scope="row">{row.adrs}</TableCell>
                            <TableCell component='th' scope="row">{row.tel}</TableCell>
                            <TableCell component='th' scope="row">{row.civil}</TableCell>
                            
                             <TableCell>
                                <Button sx={{margin:'0px 10px'}}
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
                                <Button sx={{margin:'0px 10px'}}
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