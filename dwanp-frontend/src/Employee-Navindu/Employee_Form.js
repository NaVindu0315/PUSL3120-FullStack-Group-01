
///////////////////////////
//Navindu
//////////////////////


import React, { useEffect, useState } from "react";
import { Button, Grid, Typography, Input } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const EmployeeForm = ({props}) =>
{
    const navigate = useNavigate();
    return(
        <Grid
        container
        spacing={2}
        sx={{ backgroundColor: "#ffffff", marginBottom: "30px" }}>
            <Grid item xs={12}>
        <Typography component="h1" sx={{ color: "#000000" }}>
          User Information
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component="label"
          htmlFor="id"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          ID
        </Typography>
        <Input
          type="number"
          id="id"
          name="id"
          sx={{ width: "400px" }}
          //value={id}
          //onChange={e => setid(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component="label"
          htmlFor="name"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          Name
        </Typography>
        <Input
          type="text"
          id="name"
          name="name"
          sx={{ width: "400px" }}
        //  value={name}
          //onChange={e=>setname(e.target.value)}
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
          "&:hover": {
            opacity: 0.7,
            backgroundColor: "#00c6e6",
          },
        }}
        onClick={()=> {}
        }
      >
       Add
        {/**for 
         * the button update and add chaning paste this code inside the onClick 
         *   onClick={()=> isedit ? updateUser({id,name}) :
          addUser({id,name})
        }
      >
      this one is for button
        {
          isedit? 'update' : 'add'
        }
         */}
       
      </Button>

      <Button
        sx={{
          margin: "auto",
          marginBottom: "20px",
          backgroundColor: "#00c6e6",
          color: "#000000",
          marginLeft: "15px",
          marginTop: "20px",
          "&:hover": {
            opacity: 0.7,
            backgroundColor: "#00c6e6",
          },
        }}
        onClick={()=>
          navigate('/')
          
        }
      >
        Home
      </Button>



        </Grid>
    )
    



}
export default EmployeeForm;