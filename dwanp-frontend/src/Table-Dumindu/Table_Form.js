
///////////////////////////
//Dumind
//////////////////////


import React, { useEffect, useState } from "react";
import { Button, Grid, Typography, Input } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const TableForm = ({props}) =>
{
    const [table_no, setTableNo] = useState(0);
    const [used_time, setUsedTime] = useState();
    const [used_date, setUsedDate] = useState();
    const [person_count, setPersonCount] = useState(0);

    return (
        <Grid container spacing={2} sx={{backgroundColor: "#ffffff", marginBottom: "30px", display: "block",}}>
            <Grid item sx={12}>
                <Typography component={"h1"} sx={{color: "#000000"}}>
                    Table Reservation
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{display: "flex"}}>
                <Typography 
                  component={"label"} 
                  htmlFor="table_no" 
                  sx={{
                    color: "#000000", 
                    marginBottom: "20px", 
                    fontSize: "16px", 
                    width: "100px", 
                    display: "block",
                  }}
                >
                    Table No
                </Typography>
                <Input 
                  type="number" 
                  id="table_no" 
                  name="table_no" 
                  sx={{width: "400px"}} 
                  value={table_no} 
                  onChange={e => setTableNo(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{display: "flex"}}>
                <Typography 
                  component={"label"} 
                  htmlFor="used_date" 
                  sx={{
                    color: "#000000", 
                    marginBottom: "20px", 
                    fontSize: "16px", 
                    width: "100px", 
                    display: "block",
                    }}
                >
                    Date
                </Typography>
                <Input 
                  type="date" 
                  id="used_date" 
                  name="used_date" 
                  sx={{width: "400px"}} 
                  value={used_date} 
                  onChange={e => setUsedDate(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{display: "flex"}}>
                <Typography 
                  component={"label"} 
                  htmlFor="used_time" 
                  sx={{
                    color: "#000000", 
                    marginBottom: "20px", 
                    fontSize: "16px", 
                    width: "100px", 
                    display: "block",
                    }}
                >
                    Time
                </Typography>
                <Input 
                  type="time" 
                  id="used_time" 
                  name="used_time" 
                  sx={{width: "400px"}} 
                  value={used_time} 
                  onChange={e => setUsedTime(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{display: "flex"}}>
                <Typography 
                  component={"label"} 
                  htmlFor="person_count" 
                  sx={{
                    color: "#000000", 
                    marginBottom: "20px", 
                    fontSize: "16px", 
                    width: "100px", 
                    display: "block",
                    }}
                >
                    Person Count
                </Typography>
                <Input 
                  type="number" 
                  id="person_count" 
                  name="person_count" 
                  sx={{width: "400px"}} 
                  value={person_count} 
                  onChange={e => setPersonCount(e.target.value)}
                />
            </Grid>

            <Button 
            sx={{
                margin: "auto", 
                marginBottom: "20px", 
                backgroundColor: "#00c6e6", 
                color: "#000000", 
                marginLeft: "15px", 
                marginTop: "20px", 
                "&:hover": {opacity: "0.7", backgroundColor: "00c6e6",}
                }}
            >
                Add
            </Button>

            <Button 
            sx={{
                margin: "auto", 
                marginBottom: "20px", 
                backgroundColor: "#00c6e6", 
                color: "#000000", 
                marginLeft: "15px", 
                marginTop: "20px", 
                "&:hover": {opacity: "0.7", backgroundColor: "00c6e6",}
                }}
            >
                Update
            </Button>

            <Button 
            sx={{
                margin: "auto", 
                marginBottom: "20px", 
                backgroundColor: "#00c6e6", 
                color: "#000000", 
                marginLeft: "15px", 
                marginTop: "20px", 
                "&:hover": {opacity: "0.7", backgroundColor: "00c6e6",}
                }}
            >
                Delete
            </Button>
        </Grid>
    );
}
export default TableForm;