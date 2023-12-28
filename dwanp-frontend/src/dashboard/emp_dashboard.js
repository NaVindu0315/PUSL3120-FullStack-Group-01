//this is the homepage

import {  Container, Box, Grid} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import MyComponent from '../navbar'; 
import posterImage from '../Poster (2).png'; 
import { IconButton } from '@mui/material';
import WidgetsIcon from '@mui/icons-material/Widgets';
import InventoryIcon from '@mui/icons-material/Inventory';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import GroupsIcon from '@mui/icons-material/Groups';
import CallIcon from '@mui/icons-material/Call';

const EmpDashboard = ({ props }) => {
    const navigate = useNavigate();
    return (
        <Container maxWidth="xl" >
            <navbar>
            <MyComponent />
            </navbar> 
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 0 }}>
                <div style={{ position: 'relative' }}>
                <img src={posterImage} alt="Poster" style={{ width: '92rem', height: '35rem' }} />
                <h1 style={{
                    position: 'absolute',
                    top: '19rem',  
                    left: '80%',
                    transform: 'translateX(-50%)',  
                    color: '#e6c235',  
                    fontWeight: 'bold',  
                    fontSize: '60px',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',  
                }}>Employee Dashboard</h1>
                </div>
            </Box>


            <Grid>
                <IconButton
                className="usr-btn" onClick={()=>navigate('/menu')}
            style={{
                borderRadius: '10px',
                backgroundColor: 'black',
                color: '#e6c235',
                position: 'absolute', 
                fontSize: '18px',
                width: '25%',
                height: '10%',
                bottom: '0%',
                left: '17%',
                transform: 'translate(90%)' ,
                boxShadow: '0px 0px 5px rgba(255, 255, 0, 0.5)',
            }}
                >
                    <WidgetsIcon style={{ marginRight: '7px' }} /> 
                    Menu
                </IconButton>

                <IconButton
                className="usr-btn" onClick={()=>navigate('/inventory')}
            style={{
                borderRadius: '10px',
                backgroundColor: 'black',
                color: '#e6c235',
                position: 'absolute', 
                fontSize: '18px',
                width: '25%',
                height: '10%',
                bottom: '-15%',
                left: '-8%',
                transform: 'translate(90%)' ,
                boxShadow: '0px 0px 5px rgba(255, 255, 0, 0.5)',
            }}
                >
                    <InventoryIcon style={{ marginRight: '7px' }} /> 
                    Inventory
                </IconButton>
           
                <IconButton
                className="usr-btn" onClick={()=>navigate('/order')}
            style={{
                borderRadius: '10px',
                backgroundColor: 'black',
                color: '#e6c235',
                position: 'absolute', 
                fontSize: '18px',
                width: '25%',
                height: '10%',
                bottom: '-15%',
                left: '42%',
                transform: 'translate(90%)' ,
                boxShadow: '0px 0px 5px rgba(255, 255, 0, 0.5)',
            }}
                >
                    <RestaurantIcon style={{ marginRight: '7px' }} /> 
                    Order
                </IconButton>
                
                <IconButton
                className="usr-btn" onClick={()=>navigate('/employee')}
            style={{
                borderRadius: '10px',
                backgroundColor: 'black',
                color: '#e6c235',
                position: 'absolute', 
                fontSize: '18px',
                width: '25%',
                height: '10%',
                bottom: '-30%',
                left: '-8%',
                transform: 'translate(90%)' ,
                boxShadow: '0px 0px 5px rgba(255, 255, 0, 0.5)',
            }}
                >
                    <GroupsIcon style={{ marginRight: '7px' }} /> 
                    Employee
                </IconButton>

                <IconButton
                className="usr-btn" onClick={()=>navigate('/')}
            style={{
                borderRadius: '10px',
                backgroundColor: 'black',
                color: '#e6c235',
                position: 'absolute', 
                fontSize: '18px',
                width: '25%',
                height: '10%',
                bottom: '-30%',
                left: '42%',
                transform: 'translate(90%)' ,
                boxShadow: '0px 0px 5px rgba(255, 255, 0, 0.5)',

            }}
                >
                    <CallIcon style={{ marginRight: '15px',mr: 5 }} /> 
                    Contact Customers
                </IconButton>
            </Grid>
        </Container>
        

    )

}

export default EmpDashboard;