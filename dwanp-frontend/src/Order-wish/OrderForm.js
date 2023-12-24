
///////////////////////////
//Wish
//////////////////////

import React, { useEffect, useState } from "react";
import { Button, Grid, Typography, Input } from "@mui/material";
//import { useNavigate } from 'react-router-dom';


const OrderForm = ({ addOrder, updateOrder, submitted, data, isEdit }) =>{

    const [Orderid, setOrderId] = useState(0);
    const [foodItemCode, setFoodItemCode] = useState('');
    const [name, setName] = useState('');
      useEffect(() => {
        if (!submitted) {
            setOrderId(0);
            setFoodItemCode('');
            setName('');
        }
    }, [submitted]);
  
    useEffect(() => {
        if(data?.Orderid !==0 && data.Orderid !==0) {
            setOrderId(data.Orderid);
            setFoodItemCode(data.foodItemCode);
            setName(data.name);
        }
    }, [data])
  
    return(
        <Grid
        container
        spacing={2}
        sx={{
            backgroundColor: '#ffffff',
            marginBottom: '30px',
            display:'block',
            marginLeft: '30px'
        }}
        >
            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography 
                component={'h1'} 
                sx={{color:'#000000', marginLeft: '15px'}}>Order Form
                </Typography>
            </Grid>
  
            <Grid>
                <Typography 
                component={'label'} 
                htmlFor="Orderid"
                sx={{
                    color:'#000000',
                    marginRight:'20px',
                    fontSize:'16px',
                    width:'100px',
                    display:'block',
                    marginLeft: '30px'
            }}
                >
                    Order ID
                </Typography>
                <Input 
                type="number"
                Orderid="Orderid"
                name="Orderid"
                sx={{ width:'400px', marginLeft: '30px'}}
                value={Orderid}
                onChange={e => setOrderId(e.target.value)}
                />
            </Grid>
  
            <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                <Typography 
                component={'h1'} 
                sx={{color:'#000000', marginLeft: '15px'}}>
                </Typography>
            </Grid>

            <Grid>
                <Typography 
                component={'label'} 
                htmlFor="Orderid"
                sx={{
                    color:'#000000',
                    marginRight:'20px',
                    fontSize:'16px',
                    width:'100px',
                    display:'block',
                    marginLeft: '30px'
            }}
                >
                    Food Item Code
                </Typography>
                <Input 
                type="text"
                Orderid="foodItemCode"
                name="foodItemCode"
                sx={{ width:'400px',  marginLeft: '30px'}}
                value={foodItemCode}
                onChange={e => setFoodItemCode(e.target.value)}
                />
            </Grid>

            <Grid>
                <Typography 
                component={'label'} 
                htmlFor="Orderid"
                sx={{
                    color:'#000000',
                    marginRight:'20px',
                    fontSize:'16px',
                    width:'100px',
                    display:'block',
                    marginLeft: '30px'
            }}
                >
                    Name
                </Typography>
                <Input 
                type="text"
                Orderid="name"
                name="name"
                sx={{ width:'400px',  marginLeft: '30px'}}
                value={name}
                onChange={e => setName(e.target.value)}
                />
            </Grid>
            <Button
            sx={{
                margin:'auto',
                marginBottom: '20px',
                backgroundColor: '#00c6e6',
                color: '#000000',
                marginLeft: '30px',
                marginTop:'20px',
                '&:hover': {
                    opacity:'0.7',
                    backgroundColor: '#00c6e6'
                }
            }}
            onClick={() => isEdit ? updateOrder({ Orderid,foodItemCode, name }) : addOrder({ Orderid, foodItemCode, name })}
            >
                {
                    isEdit ? 'Update' : 'Add'
                }
            </Button>
        </Grid>
    );
    }

    export default OrderForm;