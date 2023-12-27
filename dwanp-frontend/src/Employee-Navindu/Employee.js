///////////////////////////
//Navindu
//////////////////////
///newfunction
//importing
import { Box } from "@mui/material";
import {  Typography, Container,Grid} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import EmployeeForm from "./Employee_Form";
import EmployeeTable from "./Employee_Table";
//import for connecting backend and front end
import Axios from "axios";
import { useEffect ,useState } from "react";
import posterImage from './Poster (2).png'; 
//import './empstyle.css';
import MyComponent from '../navbar'


const Employee=()=>
{
  
  const navigate = useNavigate();
  
        //creating a state variable inside the Users component
        const [emps,setEmps] = useState([]);
         //to clear the fields once the data is submitted
         const [submitted,setSubmitted] = useState(false);
         //when updating 
         const [isedit,setIsEdit] = useState(false);

         
        //also in updating to fech the data
        const [selectedEmp,setselectedEmp]= useState({});


      //when calling a function when the page runs 
      useEffect(()=>
      {
          getEmp();
      },[]);

      //calling api
      //for getting employees
      const getEmp =() =>
      {
          //the link given from the backend for getting users
          Axios.get('http://localhost:3001/api/getemployees')
              .then(response=> {
                 // console.log(response.data.response);
                 setEmps(response?.data?.response || [])
              })
              .catch(error => {
                  console.error("Axios Error :" ,error);
              })
                          {
  
              }
      }
      //new employee adding 
      const addEmp = (data)=>
      {
          setSubmitted(true);
          ///creating the payload
          const payload=
          {
              //id: data.id,
              //name: data.name,
              //for new form
              emp_code: data.emp_code,
              emp_name :data.emp_name,
              bdate : data.bdate,
              nic : data.nic,
              adrs :data.adrs,
              tel : data.tel,
              civil : data.tel,

  
          }
          Axios.post('http://localhost:3001/api/createemp',payload)
          .then(response=> {
              // console.log(response.data.response);
             getEmp();
             setSubmitted(false);
             setIsEdit(false);
           })
           .catch(error => {
               console.error("Axios Error :" ,error);
           })
                       {
  
           }
  
      }

      ///new employee adding end

      ///update employee
      const updateEmp=(data) =>
      {
          setSubmitted(true);
             ///creating the payload
             const payload=
             {
                // id: data.id,
                // name: data.name,
                //for new form
                emp_code : data.emp_code,
                emp_name : data.emp_name,
                bdate : data.bdate,
                nic: data.nic,
                adrs : data.adrs,
                tel : data.tel,
                civil : data.civil,
     
             }
             Axios.post('http://localhost:3001/api/updateemp',payload)
             .then(response=> {
                 // console.log(response.data.response);
                getEmp();
                setSubmitted(false);
                setIsEdit(false);
              })
              .catch(error => {
                  console.error("Axios Error :" ,error);
              })
                          {
     
              }
  
      }



      ////update employee end
      //delete employee
      
      const deleteEmp = (data)=>{

        
     
        Axios.post('http://localhost:3001/api/deleteemp',data)
        .then(response=> {
            // console.log(response.data.response);
           getEmp();
           
         })
         .catch(error => {
             console.error("Axios Error :" ,error);
         });
                    

    }


      //delete employee end



    return (
        <Container maxWidth="xl" >
          
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
      }}>Employees</h1>
    </div>
   
  </Box>
</Container>

          <Box>
            {/**this for adding new data */}
            <Grid></Grid>
            <EmployeeForm
            addEmp={addEmp}
            submitted={submitted}
            updateEmp= {updateEmp}
            data ={selectedEmp}
          isedit={isedit}
            
            ></EmployeeForm>

            <EmployeeTable
            rows ={emps}
            selectedEmp={data=>{
              setselectedEmp(data);
              setIsEdit(true);
        
           }}
           // calling the delete function
         deleteEmp={data=>{
          //adding a confirmation box 
          window.confirm('aru u sure ?')&& deleteEmp(data);
       }}

            ></EmployeeTable>

          </Box>
          
        </Container>

       
      );
      
}

export default Employee;