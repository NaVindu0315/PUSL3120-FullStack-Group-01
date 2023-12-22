
///////////////////////////
//pasindu
//////////////////////
//importing
import { Box } from "@mui/material";
import { Button, Grid, Typography, Input , Container} from "@mui/material";

//import for connecting backend and front end
import Axios from "axios";
import { useEffect ,useState } from "react";

const Inventory=()=>
{
    return (
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
            <Typography variant="h2" component="h1">
              Inventory page
            </Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>
              Pasindu
            </Typography>
          </Box>
          
        </Container>
      );
      
}

export default Inventory;