import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from "@mui/material";

function Auth_Navbar() {
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
        <b>Wish</b>
  </Typography>
  <Button color="inherit" href="/Home"
      sx={{
        backgroundColor: 'black',
        color: 'white',
      }}
      >
      <b>Home</b>
  </Button>
  <Button color="inherit" href="/Employee"
      sx={{
      color: 'black', 
      marginRight: '1rem',
      '&:hover': {
        backgroundColor: 'black',
        color: 'white',
      }}}
      >
      <b>Employee</b>
  </Button>
  <Button color="inherit" href="/Inventory"
      sx={{
      color: 'black', 
      marginRight: '1rem',
      '&:hover': {
        backgroundColor: 'black',
        color: 'white',
      }}}
      >
      <b>Inventory</b>
  </Button>
  <Button color="inherit" href="/Menu"
      sx={{
      color: 'black',
      marginRight: '1rem',
      '&:hover': {
        backgroundColor: 'black',
        color: 'white',
      } }}
      >
      <b>Menu</b>
  </Button>
  <Button color="inherit" href="/Order"
  sx={{
      color: 'black', 
      marginRight: '1rem',
      '&:hover': {
        backgroundColor: 'black',
        color: 'white',
      }}}
      >
      <b>Order</b>
  </Button>
  <Button color="inherit" href="/Table"
      sx={{
      color: 'black',
      marginRight: '1rem',
      '&:hover': {
        backgroundColor: 'black',
        color: 'white',
      } }}
      >
      <b>Table</b>
  </Button>
</Toolbar>
</AppBar>
</Container>
);
}

export default Auth_Navbar;