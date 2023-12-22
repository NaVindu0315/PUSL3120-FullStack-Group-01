
///////////////////////////
//Aruni
//////////////////////
//importing
import { Box } from "@mui/material";
import Userform from "./userform";
import UsersTable from "./UsersTable";
//import for connecting backend and front end
import Axios from "axios";
import { useEffect ,useState } from "react";

const Menu=()=>
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

export default Menu;