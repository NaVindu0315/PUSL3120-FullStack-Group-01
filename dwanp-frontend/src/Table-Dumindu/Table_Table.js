
///////////////////////////
//Dumindu
//////////////////////


import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
//import { Button, Grid, Typography, Input } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const TableTable = ({rows, selectedTable, deleteTable}) =>
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
                        <TableCell>Actions</TableCell>
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
                                <Button sx={{margin: '0px 10px'}} onClick={() => selectedTable({table_no: row.table_no, used_date: row.used_date, used_time: row.used_time, person_count: row.person_count})}>
                                    Update
                                </Button>
                                <Button sx={{margin: '0px 10px'}} onClick={() => deleteTable({table_no: row.table_no})}>
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
export default TableTable;