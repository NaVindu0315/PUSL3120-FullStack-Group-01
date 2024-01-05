
///////////////////////////
//Dumind
//////////////////////


import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Grid, Typography, Input, TableContainer ,Paper, TableHead, Table, TableRow,TableCell, TableBody} from "@mui/material";

const CustomerForm = ({props}) =>
{
    const[customerid,setcustomerid] = useState(0);
    const[customername,setcustomername] = useState("");
    const[customernumber,setcustomernumber] = useState(0);
    const[customeraddress,setcustomeraddress] = useState("");
    const[dt,setdt] = useState("");

  

    return (
        <Grid container spacing={2} sx={{backgroundColor: "#ffffff", marginBottom: "30px"}}>
            <TableContainer component={Paper} >
            <Grid item sx={12}>
            <Typography 
                component={'h1'} 
                sx={{
                color:'#000000', 
                fontSize: '3rem',
                fontWeight: 'bold',
                backgroundColor:'#e6c235',
                width: '100%',
                textAlign:"center",
                
                }}>Customer Adding
                </Typography>
            </Grid>
        <Table
        
        >
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>

          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Customer ID</TableCell>
              <TableCell>
              <Input 
                  type="number" 
                  id="customerid"
                  name="customerid" 
                  sx={{width: "400px"}} 
                  value={customerid} 
                  onChange={e => setcustomerid(e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell>
              <Input 
                  type="text" 
                  id="customername"
                  name="customername" 
                  sx={{width: "400px"}} 
                  value={customername} 
                  onChange={e => setcustomername(e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mobile</TableCell>
              <TableCell>
              <Input 
                  type="number" 
                  id="customernumber" 
                  name="customernumber" 
                  sx={{width: "400px"}} 
                  value={customernumber} 
                  onChange={e => customernumber(e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>
              <Input 
                  type="text" 
                  id="address" 
                  name="address" 
                  sx={{width: "400px"}} 
                  value={customeraddress} 
                  onChange={e => setcustomeraddress(e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Birth Day</TableCell>
              <TableCell>
              <Input 
                  type="date" 
                  id="dt" 
                  name="dt" 
                  sx={{width: "400px"}} 
                  value={dt} 
                  onChange={e => setdt(e.target.value)}
                />
              </TableCell>
            </TableRow>



          
            <TableRow>
                <TableCell>
                    <Button 
            sx={{
                margin: "auto",
                marginBottom: "20px",
                backgroundColor: "black",  
                color: "white",            
                marginLeft: "15px",
                marginTop: "20px",
                "&:hover": {
                  opacity: 0.7,
                  backgroundColor: "black",  
                },
              }}
            onClick={null}
            >
                Add
            </Button>
                </TableCell>
            </TableRow>
          </TableBody>
                  </Table>
        </TableContainer>
        </Grid>
    );
}
export default CustomerForm;