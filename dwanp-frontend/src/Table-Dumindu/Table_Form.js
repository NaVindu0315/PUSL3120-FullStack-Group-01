
///////////////////////////
//Dumind
//////////////////////


import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Grid, Typography, Input, TableContainer ,Paper, TableHead, Table, TableRow,TableCell, TableBody} from "@mui/material";

const TableForm = ({addTable, updateTable, submitted, data, isUpdate}) =>
{
    const [table_no, setTableNo] = useState(0);
    const [used_date, setUsedDate] = useState('');
    const [used_time, setUsedTime] = useState('');
    const [person_count, setPersonCount] = useState(0);

    useEffect(() => {
        if (!submitted) {
            setTableNo(0);
            setUsedDate('');
            setUsedTime('');
            setPersonCount(0);
        }
    }, [submitted]);

    useEffect(() => {
        if (data?.table_no && data.table_no !== 0) {
            setTableNo(data.table_no);
            setUsedDate(data.used_date);
            setUsedTime(data.used_time);
            setPersonCount(data.person_count);
        }
    }, [data]);

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
                
                }}>Table Reservation
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
              <TableCell>Table No</TableCell>
              <TableCell>
              <Input 
                  type="number" 
                  id="table_no" 
                  name="table_no" 
                  sx={{width: "400px"}} 
                  value={table_no} 
                  onChange={e => setTableNo(e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>
              <Input 
                  type="date" 
                  id="used_date" 
                  name="used_date" 
                  sx={{width: "400px"}} 
                  value={used_date} 
                  onChange={e => setUsedDate(e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>
              <Input 
                  type="time" 
                  id="used_time" 
                  name="used_time" 
                  sx={{width: "400px"}} 
                  value={used_time} 
                  onChange={e => setUsedTime(e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Person Count</TableCell>
              <TableCell>
              <Input 
                  type="number" 
                  id="person_count" 
                  name="person_count" 
                  sx={{width: "400px"}} 
                  value={person_count} 
                  onChange={e => setPersonCount(e.target.value)}
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
            onClick={() => isUpdate ? updateTable({table_no, used_date, used_time, person_count}) : addTable({table_no, used_date, used_time, person_count})}
            >
                {isUpdate ? "Update" : "Add"}
            </Button>
                </TableCell>
            </TableRow>
          </TableBody>
                  </Table>
        </TableContainer>
        </Grid>
    );
}
export default TableForm;