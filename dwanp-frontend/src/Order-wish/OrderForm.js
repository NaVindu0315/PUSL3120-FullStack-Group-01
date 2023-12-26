
///////////////////////////
//Wish
//////////////////////

import React, { useEffect, useState } from "react";
import { Button, Grid, Typography, Input } from "@mui/material";


const OrderForm = ({ addOrder, updateOrder, submitted, data, isEdit }) =>{

    const [Orderid, setOrderId] = useState(0);
    const [foodItemCode, setFoodItemCode] = useState('');
    const [noOfPotions, setNoOfPotions] = useState('');
    const [date, setDate] = useState('');
      useEffect(() => {
        if (!submitted) {
            setOrderId('');
            setFoodItemCode('');
            setNoOfPotions('');
            setDate('');
        }
    }, [submitted]);
  
    useEffect(() => {
        if(data?.Orderid !==0 && data.Orderid !==0) {
            setOrderId(data.Orderid);
            setFoodItemCode(data.foodItemCode);
            setNoOfPotions(data.noOfPotions);
            setDate(data.date);
        }
    }, [data])
  
    return(
        <Grid
        container
        spacing={1}
        sx={{
            backgroundColor: '#ffffff',
            marginBottom: '30px',
            display:'flex',
            justifyContent: 'center', 
            alignItems: 'center',
            minHeight: '50vh'
        }}
        >
            <Grid item xs={12} sm={0} sx={{display:'flex', justifyContent: 'center', mt: '-200px'}}>
            
                <Typography 
                component={'h1'} 
                sx={{
                color:'#000000', 
                fontSize: '3rem',
                fontWeight: 'bold',
                backgroundColor:'#e6c235',
                width: '100%',
               
                textAlign:"center",
                
                }}>Order Form
                </Typography>
            </Grid>
  
            <Grid>
                <Typography 
                component={'label'} 
                htmlFor="Orderid"
                sx={{
                    color:'#000000',
                    fontSize:'16px',
                    width:'100px',
                    display:'block',
                    marginLeft: '-3%'
            }}
                >
                    Order ID
                </Typography>
                <Input 
                type="number"
                Orderid="Orderid"
                name="Orderid"
                sx={{ width:'400px', marginLeft: '-3%'}}
                value={Orderid}
                onChange={e => setOrderId(e.target.value)}
                />
            </Grid>
  
            <Grid>
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
                    fontSize:'16px',
                    width:'150px',
                    display:'block',
                    marginLeft: '10%',
                    marginBottom: '10px'
            }}
                >
                    Food Item Code
                </Typography>
                <Input 
                type="text"
                Orderid="foodItemCode"
                name="foodItemCode"
                sx={{ width:'400px',  marginLeft: '10%', marginBottom: '10px'}}
                value={foodItemCode}
                onChange={e => setFoodItemCode(e.target.value)}
                />
            </Grid>

            <Grid item xs={6} sx={{ display: 'flex', alignContent:'left', flexDirection: 'column' }}>
                <Typography 
                component={'label'} 
                htmlFor="Orderid"
                sx={{
                    color:'#000000',
                    fontSize:'16px',
                    width:'120px',
                    display:'block',
                    marginLeft: '42%',
                    
                    
            }}
                >
                    No Of Potions
                </Typography>
                <Input 
                type="text"
                Orderid="noOfPotions"
                name="noOfPotions"
                sx={{ width:'400px',  marginLeft: '42%', marginBottom: '20px',}}
                value={noOfPotions}
                onChange={e => setNoOfPotions(e.target.value)}
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
                    marginLeft: '10%'
            }}
                >
                    Date
                </Typography>
                <Input 
                type="text"
                Orderid="date"
                name="date"
                sx={{ width:'400px',  marginLeft: '10%', marginBottom: '13px'}}
                value={date}
                onChange={e => setDate(e.target.value)}
                />
            </Grid>

            <Button
            sx={{
                
                margin:'auto',
                marginBottom: '-9%',
                backgroundColor: '#e6c235',
                color: '#000000',
                marginLeft: '50px',
                marginTop:'20px',
                width: '10%',
                hight: '20%',
                borderRadius:'30px',
                '&:hover': {
                    opacity:'0.7',
                    color:'#ffffff',
                    backgroundColor: '#000000'
                }
            }}
            onClick={() => isEdit ? updateOrder({ Orderid, foodItemCode, noOfPotions, date }) : addOrder({ Orderid, foodItemCode, noOfPotions, date })}
            >
                {
                    isEdit ? 'Update' : 'Add'
                }
            </Button>
        </Grid>
    );
    }

    export default OrderForm;
