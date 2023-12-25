import {  Container, Box, Typography, Grid, Table, TableCell, TableHead,TableRow,TableBody } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const UserRegistration = ({props}) =>
{
    const navigate = useNavigate();
    return(

        <Container maxWidth="xl">
            <Typography variant="h5" component="h5"> 
            <button className="usr-btn" onClick={()=>navigate('/')}>Back</button>
            
            </Typography>
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
                           Nic
                            </TableCell>
                            <TableCell>
                            <input
                        type="text"
                        //value={textValue}
                            //onChange={(event) => setTextValue(event.target.value)}
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
                        type="text"
                        //value={textValue}
                            //onChange={(event) => setTextValue(event.target.value)}
    />
                            </TableCell>
                        </TableRow>
             {/*third row */}
             <TableRow >
                            <TableCell></TableCell>
                            <TableCell>
                           
                            </TableCell>
                            <TableCell> <button className="usr-btn" onClick={()=>navigate('/userlog')}>Register</button></TableCell>
                        </TableRow>
                    
                </TableBody>
            </Table>
        </Grid>
    </Container>

        


    )
}
export default UserRegistration;