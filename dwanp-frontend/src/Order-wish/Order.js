
///////////////////////////
//Wish
//////////////////////
//importing
import { Box } from "@mui/material";
import Userform from "./userform";
import UsersTable from "./UsersTable";
//import for connecting backend and front end
import Axios from "axios";
import { useEffect ,useState } from "react";

const Order=()=>
{
    return (
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
            <Typography variant="h2" component="h1">
              Order Page
            </Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>
              Wish
            </Typography>
          </Box>
          
        </Container>
      );
      
}

export default Order;