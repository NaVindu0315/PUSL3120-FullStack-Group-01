
///////////////////////////
//Wish
//////////////////////
//importing
import { Box } from "@mui/material";
import OrderForm from "./OrderForm";
import OrderTable from "./OrderTable";
import { useNavigate } from 'react-router-dom';
import Axios from "axios";  
import { useEffect, useState } from "react";
import { Typography, Container } from "@mui/material";
import posterImage from './Poster (2).png'; 

const Order = () => {
  const [Order, setOrder] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getOrder();
  }, []);

  const getOrder = () => {
    Axios.get('http://localhost:3001/api/Order')
    .then(response => {
        setOrder(response.data.response || []);
    })
    .catch(error => {
        console.error("Axios Error : ", error);
    });
}

const addOrder = (data) => {
  setSubmitted(true);

  const payload ={
      Orderid:  data.Orderid,
      foodItemCode: data.foodItemCode,
      noOfPotions: data.noOfPotions,
      date: data.date,
  }
  Axios.post('http://localhost:3001/api/createOrder', payload)
  .then(() => {
      getOrder();
      setSubmitted(false);
      setIsEdit(false);
  })
  .catch(error => {
      console.error("Axios Error : ", error);
  });
}

const updateOrder = (data) => {
setSubmitted(true);

const payload ={
  Orderid:  data.Orderid,
  foodItemCode: data.foodItemCode,
  noOfPotions: data.noOfPotions,
  date: data.date,
}
Axios.post('http://localhost:3001/api/updateOrder', payload)
.then(() => {
    getOrder();
    setSubmitted(false);
    setIsEdit(false);
})
.catch(error => {
    console.error("Axios Error : ", error);
});
}

const deleteOrder = (data) => {
Axios.post('http://localhost:3001/api/deleteOrder', data)
.then(() => {
    getOrder();
})
.catch(error => {
    console.error("Axios Error : ", error);
});
}

  const navigate = useNavigate();

  return (
    <> {/* Wrap multiple elements in a fragment */}
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 0 }}>
          <img src={posterImage} alt="Poster" style={{ width: '10rem', height: '35rem' }} /> 
          <Typography variant="h5" component="h5">
            <button className="usr-btn" onClick={() => navigate('/')}>Back</button>
          </Typography>
          <Typography variant="h2" component="h1">
            Order Page
          </Typography>
        </Box>
      </Container>
      <Box
        sx={{
          width: 'calc(100%-100px)',
          margin: 'auto',
          marginTop: '100px'
        }}
      >
        <OrderForm
          addOrder={addOrder}
          updateOrder={updateOrder}
          submitted={submitted}
          data={selectedOrder}
          isEdit={isEdit}
        />
        <OrderTable 
            rows={Order}
            selectedOrder={data => {
                setSelectedOrder(data);
                setIsEdit(true);
        }}
        deleteOrder ={data => window.confirm('Are you sure?') && deleteOrder(data)}
        />
      </Box>
    </>
  );
};

export default Order;
