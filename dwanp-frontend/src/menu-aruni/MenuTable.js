
///////////////////////////
//Aruni
//////////////////////


import React, { useEffect, useState } from "react";
import {  Paper, TableCell, TableContainer, TableHead, TableRow , TableBody, Table,Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';


const MenuTable = ({rows, selectedMenu, deleteMenu,}) => {

    return(
<TableContainer 
component={Paper}>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>
                    Menu item Number
                </TableCell>
                <TableCell>
                    Menu item Name
                </TableCell>
                <TableCell>
                    Menu Price
                </TableCell>
                <TableCell>
                    Potion
                </TableCell>
                </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                 rows.length > 0 ?  rows.map((row) => 
                                 (
                                 <TableRow key={row.id} sx ={{'&:last-child td,&:last-child th':{border:0}}}>
                                 <TableCell component='th' scope="row">{row.menu_item_no}</TableCell>
                                 <TableCell component='th' scope="row">{row.menu_item_name}</TableCell>
                                 <TableCell component='th' scope="row">{row.menu_item_price}</TableCell>
                                 <TableCell component='th' scope="row">{row.potion}</TableCell>
                                 
                                  <TableCell>
                                     <Button sx={{margin:'0px 10px'}}
                                     className="action-btn"
                                     onClick={
                                     () => {
                                 selectedMenu({
                                             menu_item_no: row.menu_item_no,
                                             menu_item_name : row.menu_item_name,
                                             menu_item_price : row.menu_item_price,
                                             potion : row.potion,
                                         })
                                        }
                                         
                                     }
                                     
                                     >
                                     Update
                        </Button>
                        <Button
                            sx={{ margin: '0px 10px' }}
                            className="action-btn"
                            onClick={() => deleteMenu({ menu_item_no: row.menu_item_no })}
                            >
                                Delete
                        </Button>
                    </TableCell>
                    </TableRow>
                   ) 
                   ) : (
                   <TableRow sx={{'&:last-child td, &:last-child th': { boarder:0}}}>
                        <TableCell component='th' scope='row'>No Data</TableCell>
                                     </TableRow>
                                 )
                            }
                        </TableBody>
                     </Table>  
         </TableContainer>
                )
                }
export default MenuTable;