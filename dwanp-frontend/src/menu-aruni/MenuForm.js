
///////////////////////////
//Aruni
//////////////////////


import React, { useEffect, useState } from "react";
import { Button, Grid, Typography, Input , Container, Box} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const MenuForm = ({props}) =>
{
    return (
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
            <Typography variant="h2" component="h1">
             Menu Form
            </Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>
              Welcome
            </Typography>
          </Box>
         
        </Container>
      );
      

}
export default MenuForm;