//this is the homepage

import { Button, Container, Box, Typography, Grid, Table, TableCell, TableHead,TableRow,TableBody } from "@mui/material";

const Homepage = ({ props }) => {
    return (
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
                <Table sx={{ mt: 4 }}>
                    <TableHead>


                        <TableRow>


                            <TableCell>Column 1</TableCell>


                            <TableCell>Column 2</TableCell>


                            <TableCell>Column 3</TableCell>


                        </TableRow>


                    </TableHead>


                    <TableBody>
                  {/*first row */}
                            <TableRow >
                                <TableCell>1</TableCell>
                                <TableCell>2</TableCell>
                                <TableCell>3</TableCell>
                            </TableRow>
                {/*second row */}
                             <TableRow >
                                <TableCell>1</TableCell>
                                <TableCell>2</TableCell>
                                <TableCell>3</TableCell>
                            </TableRow>
                 {/*third row */}
                 <TableRow >
                                <TableCell>1</TableCell>
                                <TableCell>2</TableCell>
                                <TableCell>3</TableCell>
                            </TableRow>
                        
                    </TableBody>
                </Table>
            </Grid>
        </Container>

    )

}

export default Homepage;