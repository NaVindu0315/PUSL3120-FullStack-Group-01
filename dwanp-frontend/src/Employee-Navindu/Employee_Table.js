
///////////////////////////
//Navindu
//////////////////////


import { Paper, TableCell, TableContainer, TableHead, TableRow , TableBody, Table} from "@mui/material";
import React, { useEffect, useState } from "react";
//import { Button, Grid, Typography, Input } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const EmployeeTable = ({props}) =>
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
                        
                     
                    </Table>
        
        </TableContainer>
            );
}
export default EmployeeTable;