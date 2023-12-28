//this is the homepage

import {  Container, Box, Typography, Grid, Table, TableCell, TableHead,TableRow,TableBody } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import MyComponent from '../navbar'; 
import posterImage from '../Poster (2).png'; 

const EmpDashboard = ({ props }) => {
    const navigate = useNavigate();
    return (
        <Container maxWidth="xl">
            <navbar>
            <MyComponent />
            </navbar> 
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 0 }}>
                <div style={{ position: 'relative' }}>
                <img src={posterImage} alt="Poster" style={{ width: '92rem', height: '35rem' }} />
                <h1 style={{
                    position: 'absolute',
                    top: '22rem',  
                    left: '75%',
                    transform: 'translateX(-50%)',  
                    color: '#e6c235',  
                    fontWeight: 'bold',  
                    fontSize: '60px',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',  
                }}>User Dashboard</h1>
                </div>
            </Box>
            <Grid container spacing={4}>
                <Table sx={{ mt: 4 }}>
                    <TableHead>


                        <TableRow>
                            ***welcome poster here 


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

            <Grid><button className="usr-btn" onClick={()=>navigate('/menu')}>Menu</button>
            <button className="usr-btn" onClick={()=>navigate('/inventory')}>Inventory</button>
            </Grid> 
            <Grid></Grid>
            
            <Grid><button className="usr-btn" onClick={()=>navigate('/order')}>Order</button>
            <button className="usr-btn" onClick={()=>navigate('/employee')}>Employee</button>
            </Grid> 
            
            <Grid> <button className="usr-btn" onClick={()=>navigate('')}>Contact Customers</button> </Grid>
        </Container>

    )

}

export default EmpDashboard;