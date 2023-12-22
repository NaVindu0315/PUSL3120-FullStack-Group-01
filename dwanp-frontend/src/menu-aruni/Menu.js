
///////////////////////////
//Aruni
//////////////////////
//importing
import { Box } from "@mui/material";

//import for connecting backend and front end
import Axios from "axios";
import { useEffect ,useState } from "react";
import { Button, Grid, Typography, Input , Container} from "@mui/material";

const Menu2=()=>
{
    return (
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
            <Typography variant="h2" component="h1">
              Menu Page
            </Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>
              Aruni
            </Typography>
          </Box>
          
        </Container>
      );
      
}

export default Menu2;