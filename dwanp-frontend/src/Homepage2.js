//this is the homepage

import {Button} from "@mui/material";

const Homepage  = ({props}) =>
{
    return(
        <Container maxWidth="xl">
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h2" component="h1">
        Homepage
      </Typography>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Welcome
      </Typography>
    </Box>
    <Grid container spacing={4}>
      Welcome
    </Grid>
  </Container>

    )

}

export default Homepage;