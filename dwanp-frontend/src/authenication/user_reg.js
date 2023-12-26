import {  Container, Box, Typography, Grid, Table, TableCell, TableHead,TableRow,TableBody, } from "@mui/material";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form } from "react-router-dom";

const UserRegistration = ({props}) =>
{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

   const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email,password)
   }


    const navigate = useNavigate();
    return(

        <Container maxWidth="xl">
            
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
            <Typography variant="h2" component="h1">
                User Registration
            </Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>
                Register Here
            </Typography>
        </Box>
        <Grid container spacing={4}>
            <Table sx={{ mt: 4 }}>
                <TableHead>


                    <TableRow>


                        <TableCell></TableCell>


                        <TableCell></TableCell>


                        <TableCell></TableCell>


                    </TableRow>


                </TableHead>


                <TableBody>
              {/*first row */}
                        <TableRow >
                            <TableCell></TableCell>
                            <TableCell>
                           Email
                            </TableCell>
                            <TableCell>
                            <input
                        type="email"
                        //value={textValue}
                            //onChange={(event) => setTextValue(event.target.value)}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
    />
                            </TableCell>
                        </TableRow>
            {/*second row */}
                         <TableRow >
                            <TableCell></TableCell>
                            <TableCell>
                      Password
                            </TableCell>
                            <TableCell>
                            <input
                              type="password"
                              //value={textValue}
                                  //onChange={(event) => setTextValue(event.target.value)}
                                  onChange={(e) => setPassword(e.target.value)}
                                  value={password}
    />
                            </TableCell>
                        </TableRow>
             {/*third row */}
             <TableRow >
                            <TableCell></TableCell>
                            <TableCell>
                           
                            </TableCell>
                            <TableCell> <button className="usr-btn" >Register</button></TableCell>
                        </TableRow>
                    
                </TableBody>
            </Table>
        </Grid>
    </Container>
    

        


    )
}
export default UserRegistration;