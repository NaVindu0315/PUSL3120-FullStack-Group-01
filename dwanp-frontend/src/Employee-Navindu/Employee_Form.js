
///////////////////////////
//Navindu
//////////////////////


import React, { useEffect, useState } from "react";
import { Button, Grid, Typography, Input } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const EmployeeForm = ({addEmp,submitted,data,isedit ,updateEmp}) =>
{
    const navigate = useNavigate();

      //declaring stat
   const [id,setid] = useState(0);
   const [name,setname] = useState('');
   //creating new  for new form
   const[emp_code,setEmpcode] =useState(0);
   const[emp_name,setEmpName] =useState('');
   const [bdate,setBdate] = useState('');
   const[nic,setNic] = useState(0);
   const[adrs,setAdrs] = useState('');
   const[tel,setTel] = useState(0);
   const[civil,setCivil] = useState('');


     //use effect
  useEffect(()=>{
    if(!submitted){
      setid(0);
      setname('');
    }},
    [submitted]
  );

    ///for updating 
    useEffect(()=>{
        if (  data?.id  &&data.id!==0 ){
        setid(data.id);
      setname(data.name);
      }
    },[data]);




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
          value={id}
          onChange={e => setid(e.target.value)}
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
         value={name}
        onChange={e=>setname(e.target.value)}
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
        onClick={()=>isedit ? updateEmp({id,name}) :
        addEmp({id,name})
        }
      >
        {
          isedit? 'update' : 'add'
        }
       
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