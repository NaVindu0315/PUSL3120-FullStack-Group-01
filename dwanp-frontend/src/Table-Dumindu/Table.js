
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
import posterImage from "../Poster (2).png";
import MyComponent from "../navbar.js";

//import for connecting backend and front end
import Axios from "axios";
import { useEffect ,useState } from "react";

const TableReserve=()=>
{
  const navigate = useNavigate();

  const [tables, setTables] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedTable, setSelectedTable] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        getTables();
    }, []);

    const getTables = () => {
        Axios.get('http://localhost:3001/api/tables')
            .then(response => {
                setTables(response?.data?.response || []);
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });
    }

    const addTable = (data) => {
        setSubmitted(true);

        const payload = {
            table_no: data.table_no,
            used_date: data.used_date,
            used_time: data.used_time,
            person_count: data.person_count,
        }

        Axios.post('http://localhost:3001/api/addtable', payload)
            .then(() => {
                getTables();
                setSubmitted(false);
                setIsUpdate(false);
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });
    }

    const updateTable = (data) => {
        setSubmitted(true);

        const payload = {
            table_no: data.table_no,
            used_date: data.used_date,
            used_time: data.used_time,
            person_count: data.person_count,
        }

        Axios.post('http://localhost:3001/api/updatetable', payload)
            .then(() => {
                getTables();
                setSubmitted(false);
                setIsUpdate(false);
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });
    }

    const deleteTable = (data) => {
        Axios.post('http://localhost:3001/api/deletetable', data)
            .then(() => {
               getTables();
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });
    }

    return (
        <Container maxWidth="xl">
           <navbar>
  <MyComponent />
    </navbar> 
             <Container maxWidth="xl">
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 0 }}>
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
      }}>Table Reservation</h1>
    </div>
   
  </Box>
</Container>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
            <TableForm
              addTable={addTable}
              updateTable={updateTable}
              submitted={submitted}
              data={selectedTable}
              isUpdate={isUpdate}
            />
            <TableTable 
              rows={tables} 
              selectedTable ={data => {
                  setSelectedTable(data);
                  setIsUpdate(true);
              }}
              deleteTable={data => {
                  window.confirm('Are you sure?') && deleteTable(data)
              }}
            />
          </Box>  
        </Container>
      );
      
}

export default TableReserve;