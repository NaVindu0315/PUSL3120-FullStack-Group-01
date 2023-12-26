import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from "@mui/material";

function MyComponent() {
return (
<Container maxWidth="xl">
<AppBar position="static" sx={{
   backgroundColor: '#e6c235',
   color: '#000000', 
   width: '110%',
   
   }}> 
<Toolbar>
  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    Wish
  </Typography>
  <Button color="inherit" href="/">
    Home
  </Button>
  <Button color="inherit">
    Orders
  </Button>
  {/* Add more buttons as needed */}
</Toolbar>
</AppBar>
</Container>
);
}

export default MyComponent;
