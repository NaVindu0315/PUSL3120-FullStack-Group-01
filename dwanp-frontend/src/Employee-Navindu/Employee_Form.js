
///////////////////////////
//Navindu
//////////////////////
///new cmnt 

import React, { useEffect, useState } from "react";
import { Button, Grid, Typography, Input, TableContainer ,Paper, TableHead, Table, TableRow,TableCell, TableBody} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const EmployeeForm = ({addEmp,submitted,data,isedit ,updateEmp}) =>
{
    const navigate = useNavigate();

      //declaring stat

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
      //setid(0);
      //setname('');
      setEmpcode(0);
      setEmpName('');
      setBdate('');
      setNic(0);
      setAdrs('');
      setTel(0);
      setCivil('');
    
    }},
    [submitted]
  );

    ///for updating 
    useEffect(()=>{
        if (  data?.emp_code  &&data.emp_code!==0 ){
        setEmpcode(data.emp_code);
        setEmpName(data.emp_name);
        setBdate(data.bdate);
        setNic(data.nic);
      setAdrs(data.adrs);
      setTel(data.tel);
      setCivil(data.civil);
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
  
    
      <TableContainer component={Paper} >
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
              <TableCell>Employee Code</TableCell>
              <TableCell>
              <Input
          type="number"
          id="emp_code"
          name="emp_code"
          sx={{ width: "400px" }}
          value={emp_code}
          onChange={e => setEmpcode(e.target.value)}
        />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Employee Name</TableCell>
              <TableCell>
              <Input
          type="text"
          id="emp_name"
          name="emp_name"
          sx={{ width: "400px" }}
          value={emp_name}
          onChange={e => setEmpName(e.target.value)}
        />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>BirthDay</TableCell>
              <TableCell>
              <Input
          type="text"
          id="bdate"
          name="bdate"
          sx={{ width: "400px" }}
          value={bdate}
          onChange={e => setBdate(e.target.value)}
        />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>NIC</TableCell>
              <TableCell>
              <Input
          type="number"
          id="nic"
          name="nic"
          sx={{ width: "400px" }}
          value={nic}
          onChange={e => setNic(e.target.value)}
        />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>
              <Input
          type="text"
          id="adrs"
          name="adrs"
          sx={{ width: "400px" }}
          value={adrs}
          onChange={e => setAdrs(e.target.value)}
        />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Telephone Number</TableCell>
              <TableCell>
              <Input
          type="number"
          id="tel"
          name="tel"
          sx={{ width: "400px" }}
          value={tel}
          onChange={e => setTel(e.target.value)}
        />
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell>Married Status</TableCell>
              <TableCell>
              <Input
          type="text"
          id="civil"
          name="civil"
          sx={{ width: "400px" }}
          value={civil}
          onChange={e => setCivil(e.target.value)}
        />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
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
        onClick={()=>{
        addEmp({emp_code,emp_name,bdate,nic,adrs,tel,civil})
        }}
      >
        Add
       
      </Button>
              </TableCell>
              <TableCell>

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
        {
          updateEmp({emp_code,emp_name,bdate,nic,adrs,tel,civil})
        }
       
        }
      >
      Update
      </Button>
              </TableCell>
            </TableRow>

          </TableBody>
                  </Table>


        </TableContainer>


        </Grid>
    )
    



}
export default EmployeeForm;