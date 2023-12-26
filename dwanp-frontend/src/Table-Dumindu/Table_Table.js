
///////////////////////////
//Dumindu
//////////////////////


import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
//import { Button, Grid, Typography, Input } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const TableTable = ({rows}) =>
{
    return(
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                        <TableCell>Table No</TableCell>
                        <TableCell>Used Date</TableCell>
                        <TableCell>Used Time</TableCell>
                        <TableCell>Person count</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows.length > 0 ? rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component={'th'} scope="row">{row.table_no}</TableCell>
                            <TableCell component={'th'} scope="row">{row.used_date}</TableCell>
                            <TableCell component={'th'} scope="row">{row.used_time}</TableCell>
                            <TableCell component={'th'} scope="row">{row.person_count}</TableCell>
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
export default TableTable;