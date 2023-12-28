import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

function MyComponent() {
  return (
    <Container maxWidth="xl">
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#e6c235",
          color: "#000000",
          width: "108%",
          transform: "translateX(-4%)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            <b>DWANP</b> restaurent
          </Typography>
          <Button
            href="/Home"
            sx={{
              color: "black",
              marginRight: "1rem",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            <b>Home</b>
          </Button>
          <Button

            href="/Employee"
            sx={{
              color: "black",
              marginRight: "1rem",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            <b>Employee</b>
          </Button>
          <Button
            href="/Inventory"
            sx={{
              color: "black",
              marginRight: "1rem",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            <b>Inventory</b>
          </Button>
          <Button
            
            href="/Menu"
            sx={{
              color: "black",
              marginRight: "1rem",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            <b>Menu</b>
          </Button>
          <Button
            
            href="/Order"
            sx={{
              color: "black",
              marginRight: "1rem",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            <b>Order</b>
          </Button>
          <Button
            
            href="/Table"
            sx={{
              color: "black",
              marginRight: "1rem",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            <b>Table</b>
          </Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default MyComponent;
