
///////////////////////////
//Aruni
//////////////////////


import React, { useEffect, useState } from "react";
import { Typography, Grid, Button,  Input, TableContainer ,Paper, TableHead, Table, TableRow,TableCell, TableBody} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const MenuForm = ({ addMenu, updateMenu, submitted, isEdit, data }) => {
const navigate = useNavigate();


  const[menu_item_no,setMenuItemNo] =useState(0);
   const[menu_item_name,setMenuItemName] =useState('');
   const [menu_item_price,setMenuItemPrice] = useState('');
   const[potion,setPotion] = useState(0);

    //use effect
  useEffect(()=>{
    if(!submitted){
      setMenuItemNo(0);
      setMenuItemName('');
      setMenuItemPrice('');
      setPotion(0);
    }},
    [submitted]
  );

    ///for updating
    useEffect(()=>{
      if (  data?.menu_item_no  &&data.menu_item_no!==0 ){
      setMenuItemNo(data.menu_item_no);
      setMenuItemName(data.menu_item_name);
      setMenuItemPrice(data.menu_item_price);
      setPotion(data.potion);
    }
  },[data]);

  return(
    <Grid container spacing={2}
    sx={{ backgroundColor: "#ffffff", marginBottom: "30px" }}>
        <Grid item xs={12}>
            <Typography 
                component={'h1'} 
                sx={{
                color:'#000000', 
                fontSize: '3rem',
                fontWeight: 'bold',
                backgroundColor:'#e6c235',
                width: '100%',
               
                textAlign:"center",
                
                }}>Menu 
                </Typography>

      </Grid>

  <TableContainer component={Paper} >
    <Table
    
    >
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>

      </TableHead>
      <TableBody>

        <TableRow>
          <TableCell>Menu Item No</TableCell>
          <TableCell>
          <Input
      type="number"
      id="menu_item_no"
      name="menu_item_no"
      sx={{ width: "400px" }}
      value={menu_item_no}
      onChange={e => setMenuItemNo(e.target.value)} />
          </TableCell>
        </TableRow>

        <TableRow>
              <TableCell>Menu Item Name</TableCell>
              <TableCell>
              <Input
          type="text"
          id="menu_item_name"
          name="menu_item_name"
          sx={{ width: "400px" }}
          value={menu_item_name}
          onChange={e => setMenuItemName(e.target.value)}
        />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Price</TableCell>
              <TableCell>
              <Input
          type="string"
          id="menu_item_price"
          name="menu_item_price"
          sx={{ width: "400px" }}
          value={menu_item_price}
          onChange={e => setMenuItemPrice(e.target.value)}
        />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Potion</TableCell>
              <TableCell>
              <Input
          type="number"
          id="potion"
          name="potion"
          sx={{ width: "400px" }}
          value={potion}
          onChange={e => setPotion(e.target.value)}
        />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
              <Button
        sx={{
          margin: "auto",
          marginBottom: "20px",
          backgroundColor: "black",
          color: "white",
          marginLeft: "15px",
          marginTop: "20px",
          "&:hover": {
            opacity: 0.7,
            backgroundColor: "black",
          },
        }}
        onClick={()=>{
        addMenu({menu_item_no, menu_item_name, menu_item_price, potion})
        }}
      >
        Add
       
      </Button>
              </TableCell>
              <TableCell>

              <Button
        sx={{
          margin: "auto",
          marginBottom: "20px",
          backgroundColor: "black",
          color: "white",
          marginLeft: "15px",
          marginTop: "20px",
          "&:hover": {
            opacity: 0.7,
            backgroundColor: "black",
          },
        }}
        onClick={()=>
        {
          updateMenu({menu_item_no, menu_item_name, menu_item_price, potion})
        }
      
        }
      >
      Update
      </Button>
         </TableCell>
            </TableRow>
               </TableBody>
                  </Table>
                    </TableContainer>
                       </Grid>
    )
    }

export default MenuForm;