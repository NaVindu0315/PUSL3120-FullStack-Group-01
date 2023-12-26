import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from "@mui/material";

<Container maxWidth="xl">
<AppBar position="static"> {/* Add this line */}
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
