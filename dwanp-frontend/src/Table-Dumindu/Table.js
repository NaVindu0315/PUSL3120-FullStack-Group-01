
///////////////////////////
//Dumindu
///////////////////////
//secod funcrtion
//new function
//importing
import { Box , Container, Typography} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import TableForm from "./Table_Form";
import TableTable from "./Table_Table";

//import for connecting backend and front end
//import Axios from "axios";
//import { useEffect ,useState } from "react";

const tables = [
  {
    table_no: 1,
    used_date: '26/12/2023',
    used_time: '12.00PM',
    person_count: 8,
  },
  {
    table_no: 1,
    used_date: '26/12/2023',
    used_time: '12.00PM',
    person_count: 8,
  }
];

const TableReserve=()=>
{
  const navigate = useNavigate();
    return (
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
          <Typography variant="h5" component="h5"> 
            <button className="usr-btn" onClick={()=>navigate('/')}>Back</button>
            
            </Typography>
            <Typography variant="h2" component="h1">
              Table Reservation Page
            </Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>
              Dumindu
            </Typography>
            <TableForm/>
            <TableTable rows={tables}/>
          </Box>  
        </Container>
      );
      
}

export default TableReserve