
///////////////////////////
//Aruni
//////////////////////
//menu
//importing
import { Box, Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Typography, Container } from "@mui/material";
import MenuForm from "./MenuForm";
import MenuTable from "./MenuTable";

//import for connecting backend and front end
//import Axios from "axios";
//import { useEffect ,useState } from "react";
import Axios from "axios";
import { useEffect, useState } from "react";


const Menu=()=>
{
  const navigate = useNavigate();

  const [Menu, setMenu] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  
  //create get users

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = () => {
    Axios.get('http://localhost:3001/api/menu')
    .then(response => {
        setMenu(response?.data?.response || []);
    })
    .catch(error => {
        console.error("Axios Error : ", error);
    });
}

//create add users
const addMenu = (data) => {
  setSubmitted(true);

  const payload ={
    menu_item_no:  data.menu_item_no,
    menu_item_name : data.menu_item_name,
    menu_item_price: data.menu_item_price,
    potion: data.potion,
  }
  Axios.post('http://localhost:3001/api/createmenu', payload)
  .then(response => {
      getMenu();
      setSubmitted(false);
      setIsEdit(false);
  })
  .catch(error => {
      console.error("Axios Error : ", error);
  });
}

//create update users

const updateMenu = (data) => {
  setSubmitted(true);

  const payload = {
    menu_item_no: data.menu_item_no,
    menu_item_name: data.menu_item_name,
    menu_item_price: data.menu_item_price,
    potion: data.potion,
  };

  Axios.post("http://localhost:3001/api/updatemenu", payload)
    .then( response => {
      getMenu();
      setSubmitted(false);
      setIsEdit(false);
    })
    .catch((error) => {
      console.error("Axios Error :", error);
    });
};

 //create delete users
 const deleteMenu = (id) => {
  Axios.post("http://localhost:3001/api/deletemenu", id)
    .then(response => {
      getMenu();
    })
    .catch((error) => {
      console.error("Axios Error :", error);
    });
};

return (
  <Container maxWidth="xl">
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
      }}
    >
      <Typography variant="h5" component="h5">
        <button className="usr-btn" onClick={() => navigate("/")}>
          Back
        </button>
      </Typography>
      <Typography variant="h2" component="h1">
        Menu page
      </Typography>
      <Typography></Typography>
      </Box>

      <Box>
        <Grid></Grid>
      <MenuForm
        addMenu={addMenu}
        updateMenu={updateMenu}
        submitted={submitted}
        data={selectedMenu}
        isEdit={isEdit}
      ></MenuForm>

      <MenuTable
        rows={Menu}
        selectedMenu={data => {
          setSelectedMenu(data);
          setIsEdit(true);
        }}
        deleteMenu={data => {
          window.confirm("Are you sure?") && deleteMenu(data)
        }}
      ></MenuTable>
    </Box>
  </Container>
);
      
}

export default Menu;