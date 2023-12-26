import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from "@mui/material";

<Container maxWidth="xl">
  <AppBar position="static"> {/* Add this line */}
    <Toolbar>
      {/* Navbar content will go here */}
    </Toolbar>
  </AppBar>

  ... rest of your code
</Container>
