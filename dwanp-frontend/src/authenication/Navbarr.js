import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from "@mui/material";

const Navbarr = ()=> {
return (
<Container maxWidth="xl">
<AppBar position="static" sx={{
   backgroundColor: '#e6c235',
   color: '#000000', 
   width: '108%',
   transform: 'translateX(-4%)',
   }}> 
<Toolbar>
  <Typography variant="h6" component="div" 
      sx={{ 
        flexGrow: 1, 
        }}>
        <b>DWANP Restuarants</b>
  </Typography>
  <Button color="inherit" href="/"
      sx={{
      color: 'black',
      marginRight: '1rem',
      '&:hover': {
        backgroundColor: 'black',
        color: 'white',
      } }}
      
      >
      <b>Home</b>
  </Button>
 
  <Button color="inherit" href="/userreg"
      sx={{
      color: 'black',
      marginRight: '1rem',
      '&:hover': {
        backgroundColor: 'black',
        color: 'white',
      } }}
      
      >
      <b>Register</b>
  </Button>

  <Button color="inherit" href="/userlog"
      sx={{
      color: 'black',
      marginRight: '1rem',
      '&:hover': {
        backgroundColor: 'black',
        color: 'white',
      } }}
      
      >
      <b>Login</b>
  </Button>
</Toolbar>
</AppBar>
</Container>
);
}

export default Navbarr;