
///////////////////////////
//Wish
//////////////////////


//import React, { useEffect, useState } from "react";
//import { Button, Grid, Typography, Input } from "@mui/material";
//import { useNavigate } from 'react-router-dom';

import { Table, Paper, TableCell, TableContainer, TableHead, TableRow, TableBody, Button,Typography } from "@mui/material";

const OrderTable = ({rows, selectedOrder, deleteOrder}) => {
    return (
    <TableContainer component={Paper} sx={{width:'90%', marginLeft: '50px'}}>
         <Typography 
                component={'h1'} 
                sx={{
                color:'#000000', 
                fontSize: '3rem',
                fontWeight: 'bold',
                backgroundColor:'#e6c235',
                width: '100%',
               
                textAlign:"center",
                
                }}>Order Details
                </Typography>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell>Food Item Code</TableCell>
                    <TableCell>No Of Potions</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
               rows.length > 0? rows.map(row => (
                    <TableRow key={row.Orderid} sx={{'&:last-child td, &:last-child th': { boarder:0}}}>
                    <TableCell component='th' scope='row'>{row.Orderid}</TableCell>
                    <TableCell component='th' scope='row'>{row.foodItemCode}</TableCell>
                    <TableCell component='th' scope='row'>{row.noOfPotions}</TableCell>
                    <TableCell component='th' scope='row'>{row.date}</TableCell>
                    <TableCell>
                        <Button
                            sx={{ margin: '0px 10px', color:'white' ,backgroundColor:'black'}}
                            onClick={() => selectedOrder({ Orderid: row.Orderid, noOfPotions: row.noOfPotions, foodItemCode: row.foodItemCode, date: row.date})}
                            >
                                Update
                        </Button>
                        <Button
                            sx={{ margin: '0px 10px', color:'white',backgroundColor:'black' }}
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