//this is the homepage

import {  Container, Box, Typography, Grid, Table, TableCell, TableHead,TableRow,TableBody } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import MyComponent from './navbar'; 
import posterImage from './Poster (2).png'; 

const Home = ({ props }) => {
    const navigate = useNavigate();
    return (
        <Container maxWidth="xl">
            <navbar>
               <MyComponent />
            </navbar> 
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 0 }}>
    <div style={{ position: 'relative' }}>
      <img src={posterImage} alt="Poster" style={{ width: '92rem', height: '35rem' }} />
      
    </div>
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
                         {  /*     <TableCell></TableCell>
                                <TableCell>
                                <button className="usr-btn" onClick={()=>navigate('/menu')}>Menu</button>
                                </TableCell>
                                <TableCell>
                                <button className="usr-btn" onClick={()=>navigate('/inventory')}>Inventory</button>
    </TableCell>*/}
                            </TableRow>
                {/*second row */}
                             <TableRow >
                        {/*        <TableCell></TableCell>
                                <TableCell>
                                <button className="usr-btn" onClick={()=>navigate('/order')}>Order</button>
                                </TableCell>
                                <TableCell>
                                <button className="usr-btn" onClick={()=>navigate('/employee')}>Employee</button>
                                </TableCell>*/}
                            </TableRow>
                 {/*third row */}
                 <TableRow >
                                <TableCell></TableCell>
                                <TableCell>
                                    {/**<button className="usr-btn" onClick={()=>navigate('/tableview')}>Table</button> */}
                                
                                </TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        
                    </TableBody>
                </Table>
            </Grid>
            <Grid><button className="usr-btn" onClick={()=>navigate('/userreg')}>UserRegistration</button>
            <button className="usr-btn" onClick={()=>navigate('/userlog')}>Login</button>
            </Grid> 
            
            <Grid> <button className="usr-btn" onClick={()=>navigate('/emplog')}>Employee Login</button> </Grid>

            <Typography variant="h5" sx={{ mt: 2 }}>
            <button className="usr-btn" onClick={()=>navigate('/testhome')}>Testing Home</button>
                </Typography>
        </Container>

        



    )

}

export default Home;