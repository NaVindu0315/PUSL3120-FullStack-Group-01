
///////////////////////////
//Wish
//////////////////////


//import React, { useEffect, useState } from "react";
//import { Button, Grid, Typography, Input } from "@mui/material";
//import { useNavigate } from 'react-router-dom';

import { Table, Paper, TableCell, TableContainer, TableHead, TableRow, TableBody, Button } from "@mui/material";

const OrderTable = ({rows, selectedOrder, deleteOrder}) => {
    return (
    <TableContainer component={Paper} sx={{width:'90%', marginLeft: '50px'}}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
               rows.length > 0? rows.map(row => (
                    <TableRow key={row.Orderid} sx={{'&:last-child td, &:last-child th': { boarder:0}}}>
                    <TableCell component='th' scope='row'>{row.Orderid}</TableCell>
                    <TableCell component='th' scope='row'>{row.name}</TableCell>
                    <TableCell>
                        <Button
                            sx={{ margin: '0px 10px' }}
                            onClick={() => selectedOrder({ Orderid: row.Orderid, name: row.name})}
                            >
                                Update
                        </Button>
                        <Button
                            sx={{ margin: '0px 10px' }}
                            onClick={() => deleteOrder({ Orderid: row.Orderid })}
                            >
                                Delete
                        </Button>
                    </TableCell>
                    </TableRow>
                )):(
                    <TableRow sx={{'&:last-child td, &:last-child th': { boarder:0}}}>
                        <TableCell component='th' scope='row'>No Data</TableCell>
                    </TableRow>
                )
                }
            </TableBody>
        </Table>
    </TableContainer>
    );
}

export default OrderTable;