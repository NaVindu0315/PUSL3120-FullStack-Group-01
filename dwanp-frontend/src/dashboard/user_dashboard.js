//this is the homepage

import {  Container, Box, Typography, Grid, Table, TableCell, TableHead,TableRow,TableBody } from "@mui/material";
import { useNavigate } from 'react-router-dom';



const UserDashboard = ({ props }) => {
    const navigate = useNavigate();
    return (
        <Container maxWidth="xl">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
                <Typography variant="h2" component="h1">
                    Dwanp Restaurants
                </Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                    Poster
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
            
            <Grid> <button className="usr-btn" onClick={()=>navigate('/tableview')}>Employee Login</button> </Grid>
        </Container>

    )

}

export default UserDashboard;