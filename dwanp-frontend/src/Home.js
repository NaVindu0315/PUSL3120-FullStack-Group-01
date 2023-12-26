//this is the homepage
import {  Container, Box, Grid, Table, TableCell, TableHead,TableRow,TableBody } from "@mui/material";
import { useLocation, useNavigate } from 'react-router-dom';
import MyComponent from './navbar'; 
import posterImage from './Poster (2).png'; 
import { IconButton } from '@mui/material';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';

const Home = ({ props }) => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <Container maxWidth="xl">
            <navbar>
            <MyComponent activePage={location.pathname} />
            </navbar> 
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 0 }}>
    <div style={{ position: 'relative' }}>
      <img src={posterImage} alt="Poster" style={{ width: '93rem', height: '42rem' }} />
      <IconButton
            className="usr-btn" 
            onClick={()=>navigate('/userreg')}
            style={{
                borderRadius: '10px',
                backgroundColor: 'black',
                color: '#e6c235',
                position: 'absolute', 
                fontSize: '13px',
                width: '140px',
                height: '40px',
                bottom: '90%',
                left: '70%',
                transform: 'translate(90%)' ,
                boxShadow: '0px 0px 5px rgba(255, 255, 0, 0.5)',
              }}
            >
            <PersonAddAltRoundedIcon style={{ marginRight: '5px' }} /> 
            UserRegistration
       </IconButton>
        <button className="usr-btn" onClick={()=>navigate('/userlog')}>Login</button>
        <button
        className="usr-btn"
        onClick={() => navigate('/emplog')}
        style={{
          borderRadius: '10px',
          width: '20%',
          height: '10%',
          backgroundColor: '#e6c235',
          color: 'black',
          position: 'absolute', 
          top: '70%',
          left: '50%',
          transform: 'translate(90%)' ,
          '&:hover': {
            backgroundColor: 'black',
            color: 'white'
          }
        }}
      >
        <b>Employee Login</b>
      </button>
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
            <Grid>
            <button className="usr-btn" onClick={() => navigate('/testhome')}>Testing Home</button>
            </Grid> 
            

        </Container>
    )

}

export default Home;