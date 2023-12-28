
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
import posterImage from '../Poster (2).png';
import MyComponent from '../navbar'; 

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
     <Container maxWidth="xl">
     <navbar>
  <MyComponent />
    </navbar> 

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 0,
      }}
    >
       <div style={{ position: 'relative' }}>
        
      <img src={posterImage} alt="Poster" style={{ width: "1496px", height: '35rem' }} />
      <h1 style={{
        position: 'absolute',
        top: '22rem',  
        left: '80%',
        transform: 'translateX(-50%)',  
        color: '#e6c235',  
        fontWeight: 'bold',  
        fontSize: '60px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',  
      }}>Menu</h1>
       </div>
      
          
      </Box>

      </Container>
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